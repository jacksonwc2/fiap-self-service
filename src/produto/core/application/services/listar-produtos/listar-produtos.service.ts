import { Injectable } from "@nestjs/common";
import { IProdutoRepository } from "../../repository/produto-repository.port";
import { Produto } from "../../../domain/produto";
import { IListarProdutosUseCase } from "./listar-produtos.use-case";

@Injectable()
export class ListarProdutosService implements IListarProdutosUseCase
{
  constructor(private readonly produtoRepository: IProdutoRepository) {}
  
  async buscarProdutos(): Promise<Produto[]> {
    return await this.produtoRepository.listarProdutos();
  }
}
