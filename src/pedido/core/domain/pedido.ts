import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";
import { PedidoStatusType } from "./pedido-status-type.enum";
import { ItemPedido } from "./item-pedido";

export class Pedido {
  id: string | null;

  @ApiProperty({ default: "uuid_mock_pagamento" })
  idPagamento: string;

  @ApiProperty({ default: "uuid_cliente" })
  @IsNotEmpty()
  idCliente: string;

  @ApiProperty({ default: 30.55 })
  @IsNotEmpty()
  valorTotal: number;

  @ApiProperty({ default: new Date() })
  @IsNotEmpty()
  dataCriacao: Date;

  @ApiProperty({ default: PedidoStatusType.RECEBIDO })
  @IsNotEmpty()
  @IsEnum(PedidoStatusType)
  status: string;

  @ApiProperty({ type: () => ItemPedido, isArray: true })
  @IsNotEmpty()
  combo: ItemPedido[];
}
