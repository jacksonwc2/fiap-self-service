import { Injectable } from '@nestjs/common';
import { ProdutoDTO } from '../../dto/produtoDTO';
import { ProdutoGateway } from '../gateways/produto-gateway';
import { DeletarProdutoUseCase } from '../../use-cases/deletar-produto-use-case';

@Injectable()
export class DeletarProdutoController {

  constructor(
    private readonly produtoGateway: ProdutoGateway,
    private readonly deletarProdutoUseCase: DeletarProdutoUseCase
  ) {}

  async execute(id: string) {

    await this.deletarProdutoUseCase.execute(this.produtoGateway, id);
  }
}
