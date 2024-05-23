import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProdutoEntity } from '../entity/produto.entity';
import { IProdutoRepository } from "src/produto/core/application/repository/produto-repository.port";
import { EditarProdutoDTO } from "src/produto/core/domain/editarProdutoDTO";

@Injectable()
export class ProdutoRepositoryService implements IProdutoRepository {

    constructor(
        @Inject('PRODUTO_REPOSITORY')
        private produtoRepository: Repository<ProdutoEntity>,
    ) {}

    async buscarProdutoPorNome(nome: string) {
        const produtoPorNome = await this.produtoRepository.findOne({ where: {nome}})
        return produtoPorNome;
    }

    async listarProdutos(){
        return await this.produtoRepository.find();
    }

    async listarProdutosCategoria(categoria: string){
        return await this.produtoRepository.find( { where: { categoria }});
    }

    async cadastrarProduto(produtoEntity: ProdutoEntity){
        return await this.produtoRepository.save(produtoEntity);
    }

    async editarProduto(id: string, novosDados: EditarProdutoDTO) {
        await this.produtoRepository.update(id, novosDados);
    }

    async deletarProduto(id: string){
        await this.produtoRepository.delete(id);
    }
}