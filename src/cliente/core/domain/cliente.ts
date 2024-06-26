import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { ValidarCPF } from "src/common/decorators/validarCPF.decorator";

export class Cliente {

  id: string | null;

  @IsNotEmpty()
  @ApiProperty({default: 'Nome Completo'})
  @Length(3, 250)
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({default: 'seuemail@email.com'})
  @Length(0, 250)
  email: string;

  @ValidarCPF()
  @IsNotEmpty()
  @ApiProperty({default: '70234146060'})
  cpf: string;
}
