import { CategoriaProdutoType } from "src/core/produto/core/domain/categoria-produto-type.enum";
import { Produto } from "src/core/produto/core/domain/produto";

export abstract class IBuscarProdutoPorCategoriaUseCase {
  abstract buscarProdutoPorCategoria(categoria: CategoriaProdutoType): Promise<Produto[]>;
}
