import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { IProdutoRepository } from "./produto-repository-interface";
import { ProdutoEntity } from "./produto.entity";

@Injectable()
export class ProdutoRepository implements IProdutoRepository {
  constructor(
    @Inject("PRODUTO_REPOSITORY")
    private produtoRepository: Repository<ProdutoEntity>
  ) {}

  async buscarProdutoPorID(id: string): Promise<ProdutoEntity>  {
    const produtoPorID = await this.produtoRepository.findOne({
      where: { id },
    });

    return produtoPorID;
  }

  async listarProdutos(): Promise<ProdutoEntity[]>  {
    return await this.produtoRepository.find();
  }

  async cadastrarProduto(produtoEntity: ProdutoEntity): Promise<ProdutoEntity>  {
    return await this.produtoRepository.save(produtoEntity);
  }

  async editarProduto(produtoEntity: ProdutoEntity): Promise<ProdutoEntity>  {
    return await this.produtoRepository.save(produtoEntity);
  }

  async deletarProduto(id: string) {
    await this.produtoRepository.delete(id);
  }

  async buscarProdutoPorCategoria(categoria: string): Promise<ProdutoEntity[]> {
    return await this.produtoRepository.find({ where: { categoria } });
  }
}
