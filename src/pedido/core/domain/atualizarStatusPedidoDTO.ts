import { ApiProperty } from "@nestjs/swagger";
import { PedidoStatus } from "src/pedido/adapter/driven/entity/enum/pedidoStatus.enum";

export class AtualizarPedidoDTO {
    @ApiProperty()
    status: PedidoStatus;
}