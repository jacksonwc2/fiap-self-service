import { Injectable } from '@nestjs/common';
import { ClienteDTO } from '../../dto/clienteDTO';
import { ClienteGateway } from '../gateways/cliente-gateway';
import { CadastrarClienteUseCase } from '../../use-cases/cadastrar-cliente-use-case';

@Injectable()
export class CadastrarClienteController {

  constructor(
    private readonly clienteGateway: ClienteGateway,
    private readonly cadastrarClienteUseCase: CadastrarClienteUseCase
  ) {}

  async execute(clienteDTO: ClienteDTO): Promise<ClienteDTO> {

    const cliente = await this.cadastrarClienteUseCase.execute(this.clienteGateway, clienteDTO);
    const adapterPresenter: ClienteDTO = {...cliente};
        
    return adapterPresenter;
  }
}
