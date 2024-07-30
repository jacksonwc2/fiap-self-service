import { Injectable } from "@nestjs/common";
import { ProdutoGateway } from "../adapters/gateways/produto-gateway";
import { Produto } from "../entities/produto";

@Injectable()
export class ListarProdutoUseCase {
  
  async execute(produtoGateway: ProdutoGateway): Promise<Produto[]> {
    return await produtoGateway.listarProdutos();
  }
}
