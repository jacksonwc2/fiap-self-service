import { Injectable } from "@nestjs/common";
import { ProdutoRepositoryService } from "src/produto/adapter/driven/produto-repository/produto-repository.service";
import { IProdutoRepository } from "../../repository/produto-repository.port";
import { IConsultarProdutoPorNome } from "./consulta-produtos.use-case";
import { ProdutoEntity } from "src/produto/adapter/driven/entity/produto.entity";

@Injectable()
export class ConsultarProdutos implements IConsultarProdutoPorNome{
    constructor(
        private readonly produtoRepository: IProdutoRepository,
    ){}

    async buscarPodutoPorNome(nome: string){
        const produtosSalvos = await this.produtoRepository.listarProdutos();
        const produtosLista = produtosSalvos.map(

        );
    }

    async buscarProduto(){
        await this.produtoRepository.listarProdutos;
    }

}