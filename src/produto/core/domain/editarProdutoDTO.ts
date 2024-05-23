import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class EditarProdutoDTO{

    @ApiProperty()
    @IsOptional()
    nome: string;

    @ApiProperty()
    @IsOptional()
    descricao: string;

    @ApiProperty()
    @IsOptional()
    categoria: string;

    @ApiProperty()
    @IsOptional()
    valor: number;
}