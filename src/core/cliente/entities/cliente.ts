import { HttpException, HttpStatus } from "@nestjs/common";

export class Cliente {
  id: string | null;

  nome: string;

  email: string;

  cpf: string;

  constructor(nome: string, email: string, cpf: string) {
    if (nome == null || nome.length > 250 || nome.length < 3) {
      throw new HttpException("Nome inválido",  HttpStatus.BAD_REQUEST);
    }

    if (
      email == null ||
      email.length > 250 ||
      email.length < 3 ||
      !new RegExp("[A-Za-z0-9\\._-]+@[A-Za-z0-9]+\\..(\\.[A-Za-z]+)*").test(
        email
      )
    ) {
      throw new HttpException("e-mail inválido",  HttpStatus.BAD_REQUEST);
    }

    if (
      cpf == null ||
      cpf.length != 11 ||
      !new RegExp("^[0-9]*$").test(
        cpf
      )
    ) {
      throw new HttpException("CPF inválido",  HttpStatus.BAD_REQUEST);
    }

    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
  }
}
