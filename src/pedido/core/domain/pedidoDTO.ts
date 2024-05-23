import { ApiProperty } from "@nestjs/swagger";
import { OrderStatus } from "src/pedido/adapter/driven/entity/enum/orderStatus.enum";

export class PedidoDTO {
    
    @ApiProperty()
    idPedido: string;

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
    combo: ItemPedidoDTO[];
}

export class ItemPedidoDTO {

    @ApiProperty()
    idPedido: string;

    @ApiProperty()
    idProduto: string;

    @ApiProperty()
    quantidade: number;

    @ApiProperty()
    valor: number;
}