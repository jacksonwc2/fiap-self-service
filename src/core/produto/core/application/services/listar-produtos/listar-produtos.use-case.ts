import { Produto } from "src/core/produto/core/domain/produto";

export abstract class IListarProdutosUseCase {
  abstract buscarProdutos(): Promise<Produto[]>;
}
