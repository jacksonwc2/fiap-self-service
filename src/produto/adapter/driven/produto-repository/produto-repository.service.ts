import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProdutoEntity } from '../entity/produto.entity';
import { IProdutoRepository } from "src/produto/core/application/repository/produto-repository.port";

@Injectable()
export class ProdutoRepositoryService implements IProdutoRepository {

    constructor(
        @Inject('PRODUTO_REPOSITORY')
        private produtoRepository: Repository<ProdutoEntity>,
    ) {}
    
    listarProduto() {
        throw new Error("Method not implemented.");
    }

    async listarProdutos(){
        return await this.produtoRepository.find();
    }

    async listarProdutosCategoria(categoria: string){
        return await this.produtoRepository.findOneBy({categoria});
    }

    async cadastrarProduto(produtoEntity: ProdutoEntity){
        await this.produtoRepository.save(produtoEntity);
    }

    async removerProduto(id: string){
        await this.produtoRepository.delete(id)
    }
}