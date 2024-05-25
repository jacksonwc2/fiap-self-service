import { Produto } from "src/produto/core/domain/produto";

export abstract class IEditarProdutoUseCase {
    abstract editarProduto(produto: Produto): Promise<Produto>;
  }