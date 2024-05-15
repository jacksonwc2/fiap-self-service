import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IConsultarClientePorCPFUseCase } from './consultar-cliente-cpf.use-case';
import { Cliente } from 'src/cliente/adapter/driven/entity/cliente.entity';
import { IClienteRepository } from '../../repository/cliente-repository.port';

const validarCpf = require('validar-cpf');

@Injectable()
export class ConsultarClientePorCPFService implements IConsultarClientePorCPFUseCase {
    constructor(private readonly clienteRepository: IClienteRepository) {}
    
    async buscarClientePorCPF(cpf: string): Promise<Cliente> {
        
        // verifica se o CPF é valido
        if(!validarCpf(cpf)){
            throw new HttpException('CPF inválido.', HttpStatus.BAD_REQUEST);
        }

        // verifica se esse CPF já foi cadastrado
        const cliente = await this.clienteRepository.getByCPF(cpf);

        if(!cliente){
            throw new HttpException('CPF não cadastrado. Verifique se o CPF informado está correto ou cadastre um novo Cliente com este CPF.', HttpStatus.BAD_REQUEST);
        }

        return cliente;
    }
}
