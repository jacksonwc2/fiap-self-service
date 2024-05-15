import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProdutoEntity } from '../entity/produto.entity';

@Injectable()
export class ProdutoRepositoryService {
    constructor(
        @Inject('PRODUTO_REPOSITORY')
        private produtoRepository: Repository<ProdutoEntity>,
    ) {}

    async listarProdutos(){
        return await this.produtoRepository.find();
    }

    async listarProdutosCategoria(categoria: string){
        return await this.produtoRepository.findOneBy({categoria});
    }

    async cadastrarProduto(produtoEntity: ProdutoEntity){
        await this.produtoRepository.save(produtoEntity);
    }

    async removerProduto(id: number){
        await this.produtoRepository.delete(id)
    }
}