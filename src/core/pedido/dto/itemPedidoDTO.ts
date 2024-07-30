import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class ItemPedidoDTO {

    id: string | null;
  
    idPedido: string | null;
  
    @ApiProperty({default: 'uuid_produto'})
    @IsNotEmpty()
    idProduto: string;
  
    @ApiProperty({default: 1})
    @IsNotEmpty()
    quantidade: number;
  
    valor: number | null;
  }