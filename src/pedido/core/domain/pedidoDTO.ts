import { ApiProperty } from "@nestjs/swagger";
import { OrderStatus } from "src/pedido/adapter/driven/entity/enum/orderStatus.enum";

export class PedidoDTO {
    
    id: string | null;

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

    @ApiProperty({ type: () => ItemPedidoDTO, isArray: true })
    combo: ItemPedidoDTO[];
}

export class ItemPedidoDTO {

    id: string | null;

    @ApiProperty()
    idPedido: string;

    @ApiProperty()
    idProduto: string;

    @ApiProperty()
    quantidade: number;

    @ApiProperty()
    valor: number;
}