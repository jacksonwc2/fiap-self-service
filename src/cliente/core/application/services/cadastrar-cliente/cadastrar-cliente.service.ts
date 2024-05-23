import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ICadastrarClienteUseCase } from './cadastrar-cliente.use-case';
import { IClienteRepository } from '../../repository/cliente-repository.port';
import { Cliente } from 'src/cliente/core/domain/Cliente';
import { removerCaracteresAlfanumericos } from 'src/common/utils/removerCaracteresAlfanumericos';

@Injectable()
export class CadastrarClienteService implements ICadastrarClienteUseCase {
  constructor(private readonly clienteRepository: IClienteRepository) {}

  async cadastrarCliente(cliente: Cliente): Promise<Cliente> {

    // remove os caracteres alfanumericos do CPF
    cliente.cpf = removerCaracteresAlfanumericos(cliente.cpf);

    // verifica se esse CPF já foi cadastrado
    if(await this.clienteRepository.adquirirPorCPF(cliente.cpf)){
      throw new HttpException('CPF já cadastrado.', HttpStatus.BAD_REQUEST);
    }

    // verifica se esse e-mail já foi cadastrado
    if(await this.clienteRepository.adquirirPorEmail(cliente.email)){
      throw new HttpException('E-mail já cadastrado.', HttpStatus.BAD_REQUEST);
    }

    return await this.clienteRepository.salvarCliente(cliente);
  }
}
