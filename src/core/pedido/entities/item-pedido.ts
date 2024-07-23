import { HttpException, HttpStatus } from "@nestjs/common";

export class ItemPedido {
  id: string | null;

  idPedido: string;

  idProduto: string;

  quantidade: number;

  valor: number;

  constructor(
    idPedido: string,
    idProduto: string,
    quantidade: number,
    valor: number
  ) {
    if (idPedido == null) {
      throw new HttpException("Pedido inválido", HttpStatus.BAD_REQUEST);
    }

    if (idProduto == null) {
      throw new HttpException("Produto inválido", HttpStatus.BAD_REQUEST);
    }

    if (quantidade <= 0) {
      throw new HttpException("Quantidade inválida", HttpStatus.BAD_REQUEST);
    }

    if (valor <= 0) {
      throw new HttpException("Valor inválido", HttpStatus.BAD_REQUEST);
    }

    this.idPedido = idPedido;
    this.idProduto = idProduto;
    this.quantidade = quantidade;
    this.valor = valor;
  }
}
