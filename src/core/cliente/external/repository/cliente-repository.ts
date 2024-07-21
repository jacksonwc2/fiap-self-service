import { Inject, Injectable } from "@nestjs/common";
import { IClienteRepository } from "./cliente-repository.interface";
import { Repository } from "typeorm";
import { ClienteEntity } from "./cliente.entity";

@Injectable()
export class ClienteRepository implements IClienteRepository {
  constructor(
    @Inject("CLIENTE_REPOSITORY")
    private clienteRepository: Repository<ClienteEntity>
  ) {}

  async adquirirPorID(id: string): Promise<ClienteEntity> {
    return await this.clienteRepository.findOneBy({ id });
  }

  async adquirirPorEmail(email: string): Promise<ClienteEntity> {
    return await this.clienteRepository.findOneBy({ email });
  }

  async adquirirPorCPF(cpf: string): Promise<ClienteEntity> {
    return await this.clienteRepository.findOneBy({ cpf });
  }

  async salvarCliente(dadosCliente: ClienteEntity): Promise<ClienteEntity> {
    return await this.clienteRepository.save(dadosCliente);
  }
}
