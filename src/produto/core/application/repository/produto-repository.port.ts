import { Produto } from '../../domain/produto';

export abstract class IProdutoRepository {
  abstract cadastrarProduto(produto: Produto): Promise<Produto>;
  abstract listarProdutos(): Promise<Produto[]>;
  abstract buscarProdutoPorNome(nome: string): Promise<Produto>;
  abstract editarProduto(produto: Produto): Promise<Produto>;
  abstract deletarProduto(id: string);
  abstract buscarProdutoPorCategoria(categoria: string): Promise<Produto[]>;
}
