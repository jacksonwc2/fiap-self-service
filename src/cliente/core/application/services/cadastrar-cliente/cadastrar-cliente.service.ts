import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ICadastrarClienteUseCase } from './cadastrar-cliente.use-case';
import { CadastrarClienteDTO } from '../../../domain/cadastrarClienteDTO';
import { IClienteRepository } from '../../repository/cliente-repository.port';
import { ClienteDTO } from 'src/cliente/core/domain/ClienteDTO';
import { removerCaracteresAlfanumericos } from 'src/common/utils/removerCaracteresAlfanumericos';

@Injectable()
export class CadastrarClienteService implements ICadastrarClienteUseCase {
  constructor(private readonly clienteRepository: IClienteRepository) {}

  async cadastrarCliente(clienteDTO: CadastrarClienteDTO): Promise<ClienteDTO> {

    // remove os caracteres alfanumericos do CPF
    clienteDTO.cpf = removerCaracteresAlfanumericos(clienteDTO.cpf);

    // verifica se esse CPF já foi cadastrado
    if(await this.clienteRepository.adquirirPorCPF(clienteDTO.cpf)){
      throw new HttpException('CPF já cadastrado.', HttpStatus.BAD_REQUEST);
    }

    // verifica se esse e-mail já foi cadastrado
    if(await this.clienteRepository.adquirirPorEmail(clienteDTO.email)){
      throw new HttpException('E-mail já cadastrado.', HttpStatus.BAD_REQUEST);
    }

    return await this.clienteRepository.salvarCliente(clienteDTO);
  }
}
