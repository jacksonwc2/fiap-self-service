import { CadastrarProdutoDTO } from "src/produto/core/domain/cadastrarProdutoDTO";

export abstract class ICadastrarProdutoUseCase {
    abstract cadastrarProduto(produtoDTO: CadastrarProdutoDTO);
  }