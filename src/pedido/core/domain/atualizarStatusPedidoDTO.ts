import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";
import { PedidoStatusType } from "./pedido-status-type.enum";

export class AtualizarPedidoDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(PedidoStatusType)
    status: string;
}