import { Inject, Injectable } from '@nestjs/common';
import { IClienteRepository } from 'src/cliente/core/application/repository/cliente-repository.port';
import { ClienteDTO } from 'src/cliente/core/domain/clienteDTO';
import { Repository } from 'typeorm';
import { Cliente } from '../entity/cliente.entity';

@Injectable()
export class ClienteRepositoryService implements IClienteRepository {
  constructor(
    @Inject('CLIENTE_REPOSITORY')
    private photoRepository: Repository<Cliente>,
  ) {}

  async salvarCliente(clienteDTO: ClienteDTO): Promise<ClienteDTO> {
    const cliente: Cliente = { ...clienteDTO };
    const retCliente = await this.photoRepository.save(cliente);

    return { ...retCliente };
  }
}
