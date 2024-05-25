import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

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
    categoria: string;

    @ApiProperty()
    @IsNotEmpty()
    valor: number;
}