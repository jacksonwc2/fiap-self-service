import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProdutoEntity } from "../entity/produto.entity";
import { IProdutoRepository } from "src/core/produto/core/application/repository/produto-repository.port";
import { CategoriaProdutoType } from "../../dto/categoria-produto-type-enum";
// import { Produto } from "src/core/produto/core/domain/produto";
// import { CategoriaProdutoType } from "src/core/produto/core/domain/categoria-produto-type.enum";

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

  async buscarProdutoPorCategoria(categoria: CategoriaProdutoType): Promise<ProdutoEntity[]> {
    return await this.produtoRepository.find({ where: { categoria } });
  }
}
