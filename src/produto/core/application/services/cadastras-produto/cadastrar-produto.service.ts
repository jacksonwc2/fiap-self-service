import { Injectable } from "@nestjs/common";
import { IProdutoRepository } from "../../repository/produto-repository.port";
import { ICadastrarProdutoUseCase } from "./cadastrar-produto.use-case";
import { CadastrarProdutoDTO } from "src/produto/core/domain/cadastrarProdutoDTO";

@Injectable()
export class CadastrarProdutoService implements ICadastrarProdutoUseCase{
    constructor(private produtoRepository: IProdutoRepository){}
    async cadastrarProduto(produtoDTO: CadastrarProdutoDTO){
        await this.produtoRepository.cadastrarProduto(produtoDTO);
    }
}