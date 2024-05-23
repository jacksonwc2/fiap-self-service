import { CadastrarProdutoDTO } from "../../domain/cadastrarProdutoDTO";
import { EditarProdutoDTO } from "../../domain/editarProdutoDTO";

export abstract class IProdutoRepository {
    abstract cadastrarProduto(produtoDTO: CadastrarProdutoDTO);
    abstract listarProdutos();
    abstract buscarProdutoPorNome(nome: string);
    abstract editarProduto(id: string, produto: EditarProdutoDTO);
    abstract deletarProduto(id: string);
}