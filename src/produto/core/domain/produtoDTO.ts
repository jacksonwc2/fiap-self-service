import { ApiProperty } from "@nestjs/swagger";

export class ProdutoDTO{

    @ApiProperty()
    id: number;

    @ApiProperty()
    nome: string;

    @ApiProperty()
    descricao: string;

    @ApiProperty()
    categoria: string;

    @ApiProperty()
    valor: number;
}