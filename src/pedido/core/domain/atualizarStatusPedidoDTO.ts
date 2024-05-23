import { ApiProperty } from "@nestjs/swagger";
import { OrderStatus } from "src/pedido/adapter/driven/entity/enum/orderStatus.enum";

export class AtualizarPedidoDTO {
    
    @ApiProperty()
    idPedido: string;

    @ApiProperty()
    status: OrderStatus;
}