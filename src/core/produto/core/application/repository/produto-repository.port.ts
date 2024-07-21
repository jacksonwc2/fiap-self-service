import { CategoriaProdutoType } from '../../domain/categoria-produto-type.enum';
import { Produto } from '../../domain/produto';

export abstract class IProdutoRepository {
  abstract cadastrarProduto(produto: Produto): Promise<Produto>;
  abstract listarProdutos(): Promise<Produto[]>;
  abstract buscarProdutoPorID(id: string): Promise<Produto>;
  abstract editarProduto(produto: Produto): Promise<Produto>;
  abstract deletarProduto(id: string);
  abstract buscarProdutoPorCategoria(categoria: CategoriaProdutoType): Promise<Produto[]>;
}
