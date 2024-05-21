import { CadastrarProdutoDTO } from "../../domain/cadastrarProdutoDTO";

export abstract class IProdutoRepository {
    abstract cadastrarProduto(produtoDTO: CadastrarProdutoDTO);
    abstract listarProduto();
}