import { Injectable } from '@nestjs/common';
import { ProdutoDTO } from '../../dto/produtoDTO';
import { ProdutoGateway } from '../gateways/produto-gateway';
import { ListarProdutoUseCase } from '../../use-cases/listar-produto-use-case';

@Injectable()
export class ListarProdutoController {

  constructor(
    private readonly produtoGateway: ProdutoGateway,
    private readonly listarProdutoUseCase: ListarProdutoUseCase
  ) {}

  async execute(): Promise<ProdutoDTO[]> {

    const produtos = await this.listarProdutoUseCase.execute(this.produtoGateway);
    const adapterPresenter: ProdutoDTO[] = {...produtos};
        
    return adapterPresenter;
  }
}
