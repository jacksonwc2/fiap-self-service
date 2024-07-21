import { Produto } from "src/core/produto/core/domain/produto";

export abstract class ICadastrarProdutoUseCase {
    abstract cadastrarProduto(produto: Produto);
  }