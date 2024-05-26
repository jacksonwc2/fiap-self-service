import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, Length } from "class-validator";
import { CategoriaProdutoType } from "./categoria-produto-type.enum";

export class Produto {

    id: string | null;

    @ApiProperty()
    @IsNotEmpty()
    @Length(3, 250)
    nome: string;

    @ApiProperty()
    @IsNotEmpty()
    @Length(3, 250)
    descricao: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(CategoriaProdutoType)
    categoria: string;

    @ApiProperty()
    @IsNotEmpty()
    valor: number;
}
  