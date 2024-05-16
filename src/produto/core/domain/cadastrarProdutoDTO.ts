import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CadastrarProdutoDTO{

    @IsNotEmpty()
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    @ApiProperty()
    nome: string;

    @IsNotEmpty()
    @ApiProperty()
    categoria: string;

    @IsNotEmpty()
    @ApiProperty()
    valor: number;
}