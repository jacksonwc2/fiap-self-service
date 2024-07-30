import { Injectable } from '@nestjs/common';
import { ClienteGateway } from '../gateways/cliente-gateway';
import { ConsultarClientePorCPFUseCase } from '../../use-cases/consultar-cliente-cpf-use-case'
import { ClienteDTO } from '../../dto/clienteDTO';

@Injectable()
export class ConsultarClientePorCPFController {
    
    constructor(
        private readonly clienteGateway: ClienteGateway,
        private readonly consultarClientePorCPFUseCase: ConsultarClientePorCPFUseCase
    ) {}
    
    async execute(cpf: string): Promise<ClienteDTO> {
        
        const cliente = await this.consultarClientePorCPFUseCase.execute(this.clienteGateway, cpf);
        const adapterPresenter: ClienteDTO = {...cliente};
        
        return adapterPresenter;
    }
}
