import { ApiProperty } from "@nestjs/swagger";

export class ProdutoDTO{

    id: string;

    @ApiProperty()
    nome: string;

    @ApiProperty()
    descricao: string;

    @ApiProperty()
    categoria: string;

    @ApiProperty()
    valor: number;
}