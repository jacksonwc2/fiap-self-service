import { ApiProperty } from "@nestjs/swagger";
import { PedidoStatus } from "src/pedido/adapter/driven/entity/enum/pedidoStatus.enum";

export class Pedido {
    
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
    status: PedidoStatus;

    
    @ApiProperty({ type: () => ItemPedido, isArray: true })
    itens: ItemPedido[];
}

export class ItemPedido {

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