import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, Length } from "class-validator";
import { CategoriaProdutoType } from "./categoria-produto-type.enum";

export class ProdutoDTO {

    id: string | null;

    @ApiProperty({default: 'Nome Produto'})
    nome: string;

    @ApiProperty({default: 'Descrição do Produto'})
    descricao: string;

    @ApiProperty({default: CategoriaProdutoType.LANCHE})
    @IsEnum(CategoriaProdutoType)
    categoria: string;

    @ApiProperty({default: 30.55})
    valor: number;
}
  