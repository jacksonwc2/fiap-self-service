import { Injectable } from '@nestjs/common';
import { ProdutoDTO } from '../../dto/produtoDTO';
import { ProdutoGateway } from '../gateways/produto-gateway';
import { BuscarProdutoUseCase } from '../../use-cases/buscar-produto-use-case';

@Injectable()
export class BuscarProdutoController {

  constructor(
    private readonly produtoGateway: ProdutoGateway,
    private readonly buscarProdutoUseCase: BuscarProdutoUseCase
  ) {}

  async execute(categoriaId: string): Promise<ProdutoDTO[]> {

    const produtos = await this.buscarProdutoUseCase.execute(this.produtoGateway, categoriaId);
    const adapterPresenter: ProdutoDTO[] = {...produtos};
        
    return adapterPresenter;
  }
}
