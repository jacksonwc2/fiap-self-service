import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { ItemPedidoDTO } from "./itemPedidoDTO";

export class PedidoDTO {
  
  id: string | null;

  idPagamento: string | null;

  @ApiProperty({
    default: "uuid_cliente",
    description:
      "Se o cliente optar por não se identificar esse campo não precisa ser preenchido.",
  })
  idCliente: string | null;

  valorTotal: number | null;

  dataCriacao: Date | null;

  status: string | null;

  @ApiProperty({ type: () => ItemPedidoDTO, isArray: true })
  @IsNotEmpty()
  combo: ItemPedidoDTO[];
}
