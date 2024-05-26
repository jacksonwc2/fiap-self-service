import { Injectable } from "@nestjs/common";
import { IProdutoRepository } from "../../repository/produto-repository.port";
import { Produto } from "../../../domain/produto";
import { IBuscarProdutoPorCategoriaUseCase } from "./buscar-produto-categoria.use-case";
import { CategoriaProdutoType } from "src/produto/core/domain/categoria-produto-type.enum";

@Injectable()
export class BuscarProdutoPorCategoriaService
  implements IBuscarProdutoPorCategoriaUseCase
{
  constructor(private readonly produtoRepository: IProdutoRepository) {}

  async buscarProdutoPorCategoria(categoria: CategoriaProdutoType): Promise<Produto[]> {
    return await this.produtoRepository.buscarProdutoPorCategoria(categoria);
  }
}
