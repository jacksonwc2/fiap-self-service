import { HttpException, HttpStatus } from "@nestjs/common";
import { ItemPedido } from "./item-pedido";
import { PedidoStatusType } from "./pedido-status-type.enum";

export class Pedido {
  id: string | null;

  idPagamento: string;

  idCliente: string | null;

  valorTotal: number;

  dataCriacao: Date;

  status: string;

  combo: ItemPedido[];

  constructor(idCliente: string, combo: ItemPedido[], idPagamento: string) {
    this.idCliente = idCliente;
    this.dataCriacao = new Date();
    this.status = PedidoStatusType.RECEBIDO;

    if (idPagamento == null || idPagamento.length == 0) {
      throw new HttpException(
        "Identificador do pagamento inválido",
        HttpStatus.BAD_REQUEST
      );
    }

    this.idPagamento = idPagamento;

    if (combo == null || combo.length == 0) {
      throw new HttpException(
        "Combo de produtos não pode estar vazio",
        HttpStatus.BAD_REQUEST
      );
    }

    let valor = 0;
    combo.forEach((element) => {
      if (Number(element.quantidade) == 0) {
        throw new HttpException(
          "Ops... Informe a quantidade correta para o produto " +
            element.idProduto,
          HttpStatus.BAD_REQUEST
        );
      }

      valor += Number(element.valor) * Number(element.quantidade);
    });

    this.valorTotal = valor;
    this.combo = combo;
  }
}
