import { Produto } from "src/produto/core/domain/produto";

export abstract class ICadastrarProdutoUseCase {
    abstract cadastrarProduto(produto: Produto);
  }