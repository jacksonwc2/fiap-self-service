import { Injectable } from "@nestjs/common";
import { IProdutoRepository } from "../../repository/produto-repository.port";
import { Produto } from "../../../domain/produto";
import { IBuscarProdutoPorCategoriaUseCase } from "./buscar-produto-categoria.use-case";

@Injectable()
export class BuscarProdutoPorCategoriaService
  implements IBuscarProdutoPorCategoriaUseCase
{
  constructor(private readonly produtoRepository: IProdutoRepository) {}

  async buscarProdutoPorCategoria(categoria: string): Promise<Produto[]> {
    return await this.produtoRepository.buscarProdutoPorCategoria(categoria);
  }
}
