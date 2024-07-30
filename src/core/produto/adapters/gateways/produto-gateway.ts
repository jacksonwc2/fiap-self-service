import { Injectable } from "@nestjs/common";
import { IProdutoRepository } from "../../external/repository/produto-repository-interface";
import { Produto } from "../../entities/produto";

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

  async buscarProdutoPorCategoria(categoria: string): Promise<Produto[]> {
    return await this.produtoRepository.buscarProdutoPorCategoria(categoria);
  }
}
