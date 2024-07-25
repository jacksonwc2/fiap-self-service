import { Injectable } from '@nestjs/common';
import { ProdutoDTO } from '../../dto/produtoDTO';
import { ProdutoGateway } from '../gateways/produto-gateway';
import { CadastrarProdutoUseCase } from '../../use-cases/cadastrar-produto-use-case';

@Injectable()
export class CadastrarProdutoController {

  constructor(
    private readonly produtoGateway: ProdutoGateway,
    private readonly cadastrarProdutoUseCase: CadastrarProdutoUseCase
  ) {}

  async execute(produtoDTO: ProdutoDTO): Promise<ProdutoDTO> {

    const produto = await this.cadastrarProdutoUseCase.execute(this.produtoGateway, produtoDTO);
    const adapterPresenter: ProdutoDTO = {...produto};
        
    return adapterPresenter;
  }
}
