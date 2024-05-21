import { Injectable } from "@nestjs/common";
import { ProdutoRepositoryService } from "src/produto/adapter/driven/produto-repository/produto-repository.service";
import { IProdutoRepository } from "../../repository/produto-repository.port";

@Injectable()
export class ConsultarProdutos {
    constructor(
        private readonly produtoRepository: IProdutoRepository,
    ){}

    async buscarProduto(){
        await this.produtoRepository.listarProduto;
    }

}