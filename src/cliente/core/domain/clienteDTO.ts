import { ApiProperty } from '@nestjs/swagger';

export class ClienteDTO {
  @ApiProperty()
  id: null | number;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  cpf: string;
}
