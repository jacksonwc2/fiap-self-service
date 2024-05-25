import { Injectable } from "@nestjs/common";
import { IProdutoRepository } from "../../repository/produto-repository.port";
import { IDeletarProdutoUseCase } from "./deletar-produto.use-case";

@Injectable()
export class DeletarProdutoService implements IDeletarProdutoUseCase {
  constructor(private readonly produtoRepository: IProdutoRepository) {}
  async deletarProduto(id: string) {
    return await this.produtoRepository.deletarProduto(id);
  }
}
