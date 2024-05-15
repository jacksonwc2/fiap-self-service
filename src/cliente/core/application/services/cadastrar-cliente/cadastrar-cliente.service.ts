import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ICadastrarClienteUseCase } from './cadastrar-cliente.use-case';
import { CadastrarClienteDTO } from '../../../domain/cadastrarClienteDTO';
import { IClienteRepository } from '../../repository/cliente-repository.port';
import { Cliente } from 'src/cliente/adapter/driven/entity/cliente.entity';

const validarCpf = require('validar-cpf');

@Injectable()
export class CadastrarClienteService implements ICadastrarClienteUseCase {
  constructor(private readonly clienteRepository: IClienteRepository) {}

  async cadastrarCliente(clienteDTO: CadastrarClienteDTO): Promise<Cliente> {

    // verifica se o CPF é valido
    if(!validarCpf(clienteDTO.cpf)){
      throw new HttpException('Informe um CPF válido e tente novamente.', HttpStatus.BAD_REQUEST);
    }

    // verifica se esse CPF já foi cadastrado
    if(await this.clienteRepository.getByCPF(clienteDTO.cpf)){
      throw new HttpException('CPF já cadastrado.', HttpStatus.BAD_REQUEST);
    }

    // verifica se esse e-mail já foi cadastrado
    if(await this.clienteRepository.getByEmail(clienteDTO.email)){
      throw new HttpException('E-mail já cadastrado.', HttpStatus.BAD_REQUEST);
    }

    return await this.clienteRepository.salvarCliente(clienteDTO);
  }
}
