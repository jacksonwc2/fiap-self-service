import { Injectable } from "@nestjs/common";
import { ProdutoGateway } from "../adapters/gateways/produto-gateway";
import { ProdutoDTO } from "../dto/produtoDTO";
import { Produto } from "../entities/produto";

@Injectable()
export class CadastrarProdutoUseCase {
  async execute(produtoGateway: ProdutoGateway, produtoDTO: ProdutoDTO): Promise<Produto> {

    const produto = new Produto(produtoDTO.nome, produtoDTO.descricao, produtoDTO.categoria, produtoDTO.valor);

    return await produtoGateway.cadastrarProduto(produto);
  }
}