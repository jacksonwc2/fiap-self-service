import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsNotEmpty, IsNumber } from "class-validator";
import { OrderStatus } from "src/pedido/adapter/driven/entity/enum/orderStatus.enum";

export class CadastrarPedidoDTO {
    
    @IsNotEmpty()
    @ApiProperty()
    idPagamento: string;

    @IsNotEmpty()
    @ApiProperty()
    idCliente: string;

    @IsNotEmpty()
    @ApiProperty()
    valorTotal: number;

    @IsNotEmpty()
    @ApiProperty()
    dataCriacao: Date;

    @IsNotEmpty()
    @ApiProperty()
    status: OrderStatus;

    @IsNotEmpty()
    @ApiProperty()
    combo: CadastrarItemPedidoDTO[];
}

export class CadastrarItemPedidoDTO {

    id: string;

    @IsNotEmpty()
    @ApiProperty()
    idPedido: string;

    @IsNotEmpty()
    @ApiProperty()
    idProduto: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    quantidade: number;

    @IsDecimal()
    @IsNotEmpty()
    @ApiProperty()
    valor: number;
}