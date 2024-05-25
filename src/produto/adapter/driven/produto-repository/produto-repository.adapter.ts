import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProdutoEntity } from "../entity/produto.entity";
import { IProdutoRepository } from "src/produto/core/application/repository/produto-repository.port";
import { Produto } from "src/produto/core/domain/produto";

@Injectable()
export class ProdutoRepositoryAdapter implements IProdutoRepository {
  constructor(
    @Inject("PRODUTO_REPOSITORY")
    private produtoRepository: Repository<ProdutoEntity>
  ) {}

  async buscarProdutoPorNome(nome: string): Promise<Produto>  {
    const produtoPorNome = await this.produtoRepository.findOne({
      where: { nome },
    });

    return produtoPorNome;
  }

  async listarProdutos(): Promise<Produto[]>  {
    return await this.produtoRepository.find();
  }

  async cadastrarProduto(produto: Produto): Promise<Produto>  {
    return await this.produtoRepository.save(produto);
  }

  async editarProduto(produto: Produto): Promise<Produto>  {
    return await this.produtoRepository.save(produto);
  }

  async deletarProduto(id: string) {
    await this.produtoRepository.delete(id);
  }

  async buscarProdutoPorCategoria(categoria: string): Promise<Produto[]> {
    return await this.produtoRepository.find({ where: { categoria } });
  }
}
