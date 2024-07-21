import { Injectable } from "@nestjs/common";
import { IClienteRepository } from "../../external/repository/cliente-repository.interface";
import { Cliente } from "../../entities/cliente";

@Injectable()
export class ClienteGateway {
  constructor(private readonly clienteRepository: IClienteRepository) {}

  async adquirirPorID(id: string): Promise<Cliente> {
    return await this.clienteRepository.adquirirPorID(id);
  }

  async adquirirPorEmail(email: string): Promise<Cliente> {
    return await this.clienteRepository.adquirirPorEmail(email);
  }

  async adquirirPorCPF(cpf: string): Promise<Cliente> {
    return await this.clienteRepository.adquirirPorCPF(cpf);
  }

  async salvarCliente(dadosCliente: Cliente): Promise<Cliente> {
    return await this.clienteRepository.salvarCliente(dadosCliente);
  }
}
