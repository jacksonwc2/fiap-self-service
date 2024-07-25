import { HttpException, HttpStatus } from "@nestjs/common";

export class Produto {
  id: string | null;

  nome: string;

  descricao: string;

  categoria: string;

  valor: number;

  constructor(nome: string, descricao: string, categoria: string, valor: number) {
    if (nome == null || nome.length > 250 || nome.length < 3) {
      throw new HttpException("Nome inválido",  HttpStatus.BAD_REQUEST);
    }

    if (descricao == null || descricao.length > 250 || descricao.length < 3) {
      throw new HttpException("descrição inválida",  HttpStatus.BAD_REQUEST);
    }

    if (categoria == null) {
      throw new HttpException("Categoria inválida",  HttpStatus.BAD_REQUEST);
    }

    this.nome = nome;
    this.descricao = descricao;
    this.categoria = categoria;
    this.valor = valor;
  }
}
