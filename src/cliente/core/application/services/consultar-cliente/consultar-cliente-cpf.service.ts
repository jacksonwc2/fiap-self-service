import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IConsultarClientePorCPFUseCase } from './consultar-cliente-cpf.use-case';
import { IClienteRepository } from '../../repository/cliente-repository.port';
import { Cliente } from 'src/cliente/core/domain/Cliente';
import { removerCaracteresAlfanumericos } from 'src/common/utils/removerCaracteresAlfanumericos';

@Injectable()
export class ConsultarClientePorCPFService implements IConsultarClientePorCPFUseCase {
    constructor(private readonly clienteRepository: IClienteRepository) {}
    
    async buscarClientePorCPF(cpf: string): Promise<Cliente> {

        // remove caracteres do CPF
        const valorCPF = removerCaracteresAlfanumericos(cpf);
        
        // verifica se esse CPF já foi cadastrado
        const cliente = await this.clienteRepository.adquirirPorCPF(valorCPF);

        if(!cliente){
            throw new HttpException('Cliente não encontrado.', HttpStatus.BAD_REQUEST);
        }

        return cliente;
    }
}
