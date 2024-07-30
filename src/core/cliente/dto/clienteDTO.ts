import { ApiProperty } from "@nestjs/swagger";

export class ClienteDTO {
  
  id: string | null;

  @ApiProperty({default: 'Nome Completo'})
  nome: string;
 
  @ApiProperty({default: 'seuemail@email.com'})
  email: string;
  
  @ApiProperty({default: '70234146060'})
  cpf: string;
}
