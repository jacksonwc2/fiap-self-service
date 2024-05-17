import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { ValidarCPF } from 'src/common/decorators/validarCPF.decorator';

export class ClienteDTO {

  @IsNotEmpty()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @ApiProperty()
  @Length(3, 250)
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  @Length(0, 250)
  email: string;

  @ValidarCPF()
  @IsNotEmpty()
  @ApiProperty()
  cpf: string;
}
