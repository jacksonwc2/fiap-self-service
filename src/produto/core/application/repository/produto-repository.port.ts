import { CadastrarProdutoDTO } from "../../domain/cadastrarProdutoDTO";
import { EditarProdutoDTO } from "../../domain/editarProdutoDTO";
import {ProdutoDTO} from "../../domain/produtoDTO";

export abstract class IProdutoRepository {
    abstract cadastrarProduto(produtoDTO: CadastrarProdutoDTO);
    abstract listarProdutos();
    abstract buscarProdutoPorNome(nome: string);
    abstract editarProduto(id: string, produto: EditarProdutoDTO);
    abstract deletarProduto(id: string);
    abstract buscarProdutoPorCategoria(categoria: string): Promise<ProdutoDTO[]>;
}