import { Inject, Injectable } from "@nestjs/common";
import { IClienteRepository } from "src/cliente/core/application/repository/cliente-repository.port";
import { Repository } from "typeorm";
import { ClienteEntity } from "../entity/cliente.entity";
import { Cliente } from "src/cliente/core/domain/cliente";

@Injectable()
export class ClienteRepositoryAdapter implements IClienteRepository {
  constructor(
    @Inject("CLIENTE_REPOSITORY")
    private clienteRepository: Repository<ClienteEntity>
  ) {}

  async adquirirPorID(id: string): Promise<Cliente> {
    return await this.clienteRepository.findOneBy({ id });
  }

  async adquirirPorEmail(email: string): Promise<Cliente> {
    return await this.clienteRepository.findOneBy({ email });
  }

  async adquirirPorCPF(cpf: string): Promise<Cliente> {
    return await this.clienteRepository.findOneBy({ cpf });
  }

  async salvarCliente(dadosCliente: Cliente): Promise<Cliente> {
    const cliente: ClienteEntity = { ...dadosCliente };
    return await this.clienteRepository.save(cliente);
  }
}
