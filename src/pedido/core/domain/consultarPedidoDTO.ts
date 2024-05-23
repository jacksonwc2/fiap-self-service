import { ApiProperty } from "@nestjs/swagger";
import { OrderStatus } from "src/pedido/adapter/driven/entity/enum/orderStatus.enum";

export class ConsultarPedidoDTO {
    
    @ApiProperty()
    idPagamento: string;

    @ApiProperty()
    idCliente: string;

    @ApiProperty()
    valorTotal: number;

    @ApiProperty()
    dataCriacao: Date;

    @ApiProperty()
    status: OrderStatus;

    @ApiProperty()
    combo: ConsultarItemPedidoDTO[];
}

export class ConsultarItemPedidoDTO {

    @ApiProperty()
    idPedido: string;

    @ApiProperty()
    idProduto: string;

    @ApiProperty()
    quantidade: number;

    @ApiProperty()
    valor: number;
}