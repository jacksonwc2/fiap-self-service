import { Injectable } from "@nestjs/common";
import { IProdutoRepository } from "../../core/application/repository/produto-repository.port";
import { Produto } from "../../core/domain/produto";
import { CategoriaProdutoType } from "../../core/domain/categoria-produto-type.enum";

@Injectable()
export class ProdutoGateway {
  constructor(
    private readonly produtoRepository: IProdutoRepository
  ) {}

  async buscarProdutoPorID(id: string): Promise<Produto>  {
    return await this.produtoRepository.buscarProdutoPorID(id);
  }

  async listarProdutos(): Promise<Produto[]>  {
    return await this.produtoRepository.listarProdutos();
  }

  async cadastrarProduto(produto: Produto): Promise<Produto>  {
    return await this.produtoRepository.cadastrarProduto(produto);
  }

  async editarProduto(produto: Produto): Promise<Produto>  {
    return await this.produtoRepository.editarProduto(produto);
  }

  async deletarProduto(id: string) {
    await this.produtoRepository.deletarProduto(id);
  }

  async buscarProdutoPorCategoria(categoria: CategoriaProdutoType): Promise<Produto[]> {
    return await this.produtoRepository.buscarProdutoPorCategoria(categoria);
  }
}
