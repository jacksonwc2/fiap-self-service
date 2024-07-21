import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class ItemPedido {

    id: string | null;
  
    idPedido: string;
  
    @ApiProperty({default: 'uuid_produto'})
    @IsNotEmpty()
    idProduto: string;
  
    @ApiProperty({default: 1})
    @IsNotEmpty()
    quantidade: number;
  
    @ApiProperty({default: 30.55})
    @IsNotEmpty()
    valor: number;
  }