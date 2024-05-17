import { Inject, Injectable } from '@nestjs/common';
import { IClienteRepository } from 'src/cliente/core/application/repository/cliente-repository.port';
import { CadastrarClienteDTO } from 'src/cliente/core/domain/cadastrarClienteDTO';
import { Repository } from 'typeorm';
import { Cliente } from '../entity/cliente.entity';
import { ClienteDTO } from 'src/cliente/core/domain/ClienteDTO';

@Injectable()
export class ClienteRepositoryService implements IClienteRepository {
  constructor(
    @Inject('CLIENTE_REPOSITORY')
    private clienteRepository: Repository<Cliente>,
  ) {}

  async adquirirPorEmail(email: string): Promise<ClienteDTO> {
    return await this.clienteRepository.findOneBy({email});
  }

  async adquirirPorCPF(cpf: string): Promise<ClienteDTO> {
    return await this.clienteRepository.findOneBy({cpf});
  }

  async salvarCliente(clienteDTO: CadastrarClienteDTO): Promise<ClienteDTO> {
    const cliente: Cliente = { ...clienteDTO, id: null };
    return await this.clienteRepository.save(cliente);
  }
}
