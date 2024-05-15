import { Inject, Injectable } from '@nestjs/common';
import { IClienteRepository } from 'src/cliente/core/application/repository/cliente-repository.port';
import { CadastrarClienteDTO } from 'src/cliente/core/domain/cadastrarClienteDTO';
import { Repository } from 'typeorm';
import { Cliente } from '../entity/cliente.entity';

@Injectable()
export class ClienteRepositoryService implements IClienteRepository {
  constructor(
    @Inject('CLIENTE_REPOSITORY')
    private clienteRepository: Repository<Cliente>,
  ) {}

  async getByEmail(email: string): Promise<Cliente> {
    return await this.clienteRepository.findOneBy({email});
  }

  async getByCPF(cpf: string): Promise<Cliente> {
    return await this.clienteRepository.findOneBy({cpf});
  }

  async salvarCliente(clienteDTO: CadastrarClienteDTO): Promise<Cliente> {
    const cliente: Cliente = { ...clienteDTO, id: null };
    return await this.clienteRepository.save(cliente);
  }
}
