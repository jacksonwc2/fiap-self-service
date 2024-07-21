import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";
import { PedidoStatusType } from "./pedido-status-type.enum";
import { ItemPedido } from "./item-pedido";

export class Pedido {
  id: string | null;

  @ApiProperty({
    default: "uuid_mock_pagamento",
    description: "preenchido com um MOCK de pagamento",
  })
  idPagamento: string;

  @ApiProperty({
    default: "uuid_cliente",
    description:
      "Se o cliente optar por não se identificar esse campo não precisa ser preenchido.",
  })
  idCliente: string | null;

  @ApiProperty({ default: 30.55 })
  @IsNotEmpty()
  valorTotal: number;

  @ApiProperty({
    default: new Date(),
    description:
      "A data de criação do pedido é utilizada para o gerenciamento do tempo de espera do pedido.",
  })
  @IsNotEmpty()
  dataCriacao: Date;

  @ApiProperty({
    default: PedidoStatusType.RECEBIDO,
  })
  @IsNotEmpty()
  @IsEnum(PedidoStatusType)
  status: string;

  @ApiProperty({ type: () => ItemPedido, isArray: true })
  @IsNotEmpty()
  combo: ItemPedido[];
}
