import { Injectable } from "@nestjs/common";
import { IProdutoRepository } from "../../repository/produto-repository.port";
import { ICadastrarProdutoUseCase } from "./cadastrar-produto.use-case";
import { Produto } from "src/produto/core/domain/produto";

@Injectable()
export class CadastrarProdutoService implements ICadastrarProdutoUseCase {
  constructor(private produtoRepository: IProdutoRepository) {}
  async cadastrarProduto(produto: Produto) {
    return await this.produtoRepository.cadastrarProduto(produto);
  }
}
