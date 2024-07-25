import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Pedido } from "../entities/pedido";
import { ClienteGateway } from "src/core/cliente/adapters/gateways/cliente-gateway";
import { ProdutoGateway } from "src/core/produto/adapters/gateways/produto-gateway";
import { PedidoGateway } from "../adapters/gateways/pedido-gateway";
import {CadastrarIntencaoPagamentoUseCase} from "../../pagamento/use-cases/cadastrar-intencao-pagamento-use-case";
import {IntencaoPagamentoGateway} from "../../pagamento/adapters/gateways/intencaoPagamento-gateway";

@Injectable()
export class CadastrarPedidoUseCase {
 
  async execute(clienteGateway: ClienteGateway, produtoGateway: ProdutoGateway, intencaoPagamentoGateway: IntencaoPagamentoGateway, cadastrarIntencaoPagamentoUseCase: CadastrarIntencaoPagamentoUseCase, pedidoGateway: PedidoGateway, pedido: Pedido): Promise<Pedido> {
    
    // Verifica se o cliente optou por se identificar e se o ID é valido
    if (
      pedido.idCliente &&
      (await clienteGateway.adquirirPorID(pedido.idCliente)) == null
    ) {
      throw new HttpException(
        "Cliente não encontrado.",
        HttpStatus.BAD_REQUEST
      );
    }

    // verifica os itens do combo
    for (let item of pedido.combo) {
      const produto = await produtoGateway.buscarProdutoPorID(
        item.idProduto
      );

      if (!produto) {
        throw new HttpException(
          "Ops... o produto " + item.idProduto + " não foi encontrado.",
          HttpStatus.BAD_REQUEST
        );
      }

      // registra valor atualizado
      item.valor = produto.valor;
    }

    const intencaoPagamento = await cadastrarIntencaoPagamentoUseCase.execute(intencaoPagamentoGateway)

    const novoPedido = new Pedido(pedido.idCliente, pedido.combo, intencaoPagamento.id);

    return await pedidoGateway.salvarPedido(novoPedido);
  }
}
