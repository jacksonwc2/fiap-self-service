import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Produto } from "../entities/produto";
import { ProdutoGateway } from "../adapters/gateways/produto-gateway";
import { ProdutoDTO } from "../dto/produtoDTO";

@Injectable()
export class EditarProdutoService {

  async execute(produtoGateway: ProdutoGateway, produtoDTO: ProdutoDTO): Promise<Produto> {
    
    if(!produtoDTO.id || await produtoGateway.buscarProdutoPorID(produtoDTO.id) == null){
      throw new HttpException('Produto não cadastrado.', HttpStatus.BAD_REQUEST);
    }

    return await produtoGateway.editarProduto(produtoDTO);
  }
}