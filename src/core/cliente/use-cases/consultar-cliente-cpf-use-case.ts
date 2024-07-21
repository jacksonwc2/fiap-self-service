import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { removerCaracteresAlfanumericos } from 'src/common/removerCaracteresAlfanumericos';
import { Cliente } from '../entities/cliente';
import { ClienteGateway } from '../adapters/gateways/cliente-gateway';

@Injectable()
export class ConsultarClientePorCPFUseCase {
    
    async execute(clienteGateway: ClienteGateway, cpf: string): Promise<Cliente> {

        // remove caracteres do CPF
        const valorCPF = removerCaracteresAlfanumericos(cpf);
        
        // verifica se esse CPF já foi cadastrado
        const cliente = await clienteGateway.adquirirPorCPF(valorCPF);

        if(!cliente){
            throw new HttpException('Cliente não encontrado.', HttpStatus.BAD_REQUEST);
        }

        return cliente;
    }
}
