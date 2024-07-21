import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Pedido } from "src/core/pedido/core/domain/pedido";
import { ICadastrarPedidoUseCase } from "./cadastrar-pedido.use-case";
import { IPedidoRepository } from "../../repository/pedido-repository.port";
import { IProdutoRepository } from "src/core/produto/core/application/repository/produto-repository.port";
import { IClienteRepository } from "src/core/cliente/external/repository/cliente-repository.interface";

@Injectable()
export class CadastrarPedidoUseCase implements ICadastrarPedidoUseCase {
  constructor(
    private readonly clienteRepository: IClienteRepository,
    private readonly produtoRepository: IProdutoRepository,
    private readonly pedidoRepository: IPedidoRepository
  ) {}

  async cadastrarPedido(pedido: Pedido): Promise<Pedido> {
    // Verifica se o cliente optou por se identificar e se o ID é valido
    if (
      pedido.idCliente &&
      (await this.clienteRepository.adquirirPorID(pedido.idCliente)) == null
    ) {
      throw new HttpException(
        "Cliente não encontrado.",
        HttpStatus.BAD_REQUEST
      );
    }

    // Verificando se o combo não está vazio
    if (!pedido.combo || pedido.combo.length === 0) {
      throw new HttpException(
        "O combo não pode estar vazio.",
        HttpStatus.BAD_REQUEST
      );
    }

    let valorTotal = 0;

    // verifica os itens do combo
    for (let item of pedido.combo) {
      const produto = await this.produtoRepository.buscarProdutoPorID(
        item.idProduto
      );

      if (!produto) {
        throw new HttpException(
          "Ops... o produto " + item.idProduto + " não foi encontrado.",
          HttpStatus.BAD_REQUEST
        );
      }

      if (produto.valor != item.valor) {
        throw new HttpException(
          "Ops... o valor do produto " +
            item.idProduto +
            " é inválido. Revise os dados do produto e refaça o pedido.",
          HttpStatus.BAD_REQUEST
        );
      }

      if (Number(item.quantidade) == 0) {
        throw new HttpException(
          "Ops... Informe a quantidade correta para o produto " +
            item.idProduto,
          HttpStatus.BAD_REQUEST
        );
      }

      valorTotal += Number(produto.valor) * Number(item.quantidade);
    }

    // verifica o valor total do pedido
    if (valorTotal != Number(pedido.valorTotal)) {
      throw new HttpException(
        "Ops... o valor total do pedido está inválido. O valor correto seria " +
          valorTotal,
        HttpStatus.BAD_REQUEST
      );
    }

    return await this.pedidoRepository.salvarPedido(pedido);
  }
}
