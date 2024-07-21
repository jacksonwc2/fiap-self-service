import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { ValidarCPF } from "src/infrastructure/decorators/validarCPF.decorator";

export class Cliente {
  id: string | null;

  @IsNotEmpty()
  @Length(3, 250)
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  @Length(0, 250)
  email: string;

  @ValidarCPF()
  @IsNotEmpty()
  cpf: string;

  constructor(nome: string, email: string, cpf: string) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
  }
}
