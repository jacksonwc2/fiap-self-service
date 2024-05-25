import { Produto } from "src/produto/core/domain/produto";

export abstract class IBuscarProdutoPorCategoriaUseCase {
  abstract buscarProdutoPorCategoria(categoria: string): Promise<Produto[]>;
}
