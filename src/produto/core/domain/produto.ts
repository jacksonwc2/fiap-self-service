import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, Length } from "class-validator";
import { CategoriaProdutoType } from "./categoria-produto-type.enum";

export class Produto {

    id: string | null;

    @ApiProperty({default: 'Nome Produto'})
    @IsNotEmpty()
    @Length(3, 250)
    nome: string;

    @ApiProperty({default: 'Descrição do Produto'})
    @IsNotEmpty()
    @Length(3, 250)
    descricao: string;

    @ApiProperty({default: CategoriaProdutoType.LANCHE})
    @IsNotEmpty()
    @IsEnum(CategoriaProdutoType)
    categoria: string;

    @ApiProperty({default: 30.55})
    @IsNotEmpty()
    valor: number;
}
  