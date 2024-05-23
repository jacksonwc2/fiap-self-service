import {ProdutoDTO} from 'src/produto/core/domain/produtoDTO';

export interface IConsultarProdutoPorCategoriaUseCase {
    buscarProdutoPorCategoria(categoria: string): Promise<ProdutoDTO[]>;
}
