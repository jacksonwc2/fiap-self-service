import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { PedidoStatus } from "src/pedido/adapter/driven/entity/enum/pedidoStatus.enum";

export class AtualizarPedidoDTO {
    @ApiProperty()
    @IsNotEmpty()
    status: PedidoStatus;
}