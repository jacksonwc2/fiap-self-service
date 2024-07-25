import { Injectable } from '@nestjs/common';
import { ProdutoDTO } from '../../dto/produtoDTO';
import { ProdutoGateway } from '../gateways/produto-gateway';
import { EditarProdutoUseCase } from '../../use-cases/editar-produto-use-case';

@Injectable()
export class EditarProdutoController {

  constructor(
    private readonly produtoGateway: ProdutoGateway,
    private readonly editarProdutoUseCase: EditarProdutoUseCase
  ) {}

  async execute(produtoDTO: ProdutoDTO): Promise<ProdutoDTO> {

    const produto = await this.editarProdutoUseCase.execute(this.produtoGateway, produtoDTO);
    const adapterPresenter: ProdutoDTO = {...produto};
        
    return adapterPresenter;
  }
}
