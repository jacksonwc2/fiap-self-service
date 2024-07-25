import { CategoriaProdutoType } from "../../dto/categoria-produto-type-enum";
import { ProdutoEntity } from "./produto.entity";

export abstract class IProdutoRepository {
  abstract cadastrarProduto(produto: ProdutoEntity): Promise<ProdutoEntity>;
  abstract listarProdutos(): Promise<ProdutoEntity[]>;
  abstract buscarProdutoPorID(id: string): Promise<ProdutoEntity>;
  abstract editarProduto(produto: ProdutoEntity): Promise<ProdutoEntity>;
  abstract deletarProduto(id: string);
  abstract buscarProdutoPorCategoria(categoria: string): Promise<ProdutoEntity[]>;
}
