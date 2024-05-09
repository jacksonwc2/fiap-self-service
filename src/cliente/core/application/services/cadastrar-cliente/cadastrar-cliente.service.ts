import { Injectable } from '@nestjs/common';
import { ICadastrarClienteUseCase } from './cadastrar-cliente.use-case';
import { ClienteDTO } from '../../../domain/clienteDTO';
import { IClienteRepository } from '../../repository/cliente-repository.port';

@Injectable()
export class CadastrarClienteService implements ICadastrarClienteUseCase {
  constructor(private readonly clienteRepository: IClienteRepository) {}

  async cadastrarCliente(clienteDTO: ClienteDTO): Promise<ClienteDTO> {
    return await this.clienteRepository.salvarCliente(clienteDTO);
  }
}
