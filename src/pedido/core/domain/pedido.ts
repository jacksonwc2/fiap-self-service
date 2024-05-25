import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { PedidoStatus } from "src/pedido/adapter/driven/entity/enum/pedidoStatus.enum";

export class Pedido {
  id: string | null;

  @ApiProperty()
  idPagamento: string;

  @ApiProperty()
  @IsNotEmpty()
  idCliente: string;

  @ApiProperty()
  @IsNotEmpty()
  valorTotal: number;

  @ApiProperty()
  @IsNotEmpty()
  dataCriacao: Date;

  @ApiProperty()
  @IsNotEmpty()
  status: PedidoStatus;

  @ApiProperty({ type: () => ItemPedido, isArray: true })
  @IsNotEmpty()
  itens: ItemPedido[];
}

export class ItemPedido {
  id: string | null;

  idPedido: string;

  @ApiProperty()
  @IsNotEmpty()
  idProduto: string;

  @ApiProperty()
  @IsNotEmpty()
  quantidade: number;

  @ApiProperty()
  @IsNotEmpty()
  valor: number;
}
