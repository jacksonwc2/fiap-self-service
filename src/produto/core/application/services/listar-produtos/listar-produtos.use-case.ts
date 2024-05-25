import { Produto } from "src/produto/core/domain/produto";

export abstract class IListarProdutosUseCase {
  abstract buscarProdutos(): Promise<Produto[]>;
}
