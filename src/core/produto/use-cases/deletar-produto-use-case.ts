import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ProdutoGateway } from "../adapters/gateways/produto-gateway";
@Injectable()
export class DeletarProdutoUseCase {
  async execute(produtoGateway: ProdutoGateway, id: string) {

    if(!id || await produtoGateway.buscarProdutoPorID(id) == null){
      throw new HttpException('Produto não cadastrado.', HttpStatus.BAD_REQUEST);
    }
    
    await produtoGateway.deletarProduto(id);
  }
}