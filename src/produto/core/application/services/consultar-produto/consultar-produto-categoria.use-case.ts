import {ProdutoDTO} from 'src/produto/core/domain/produtoDTO';

export abstract class IConsultarProdutoPorCategoriaUseCase {
    abstract buscarProdutoPorCategoria(categoria: string): Promise<ProdutoDTO[]>;
}
