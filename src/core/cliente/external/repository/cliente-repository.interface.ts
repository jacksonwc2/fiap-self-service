import { ClienteEntity } from './cliente.entity';

export abstract class IClienteRepository {
  abstract salvarCliente(cliente: ClienteEntity): Promise<ClienteEntity>;
  abstract adquirirPorID(id: string): Promise<ClienteEntity>;
  abstract adquirirPorEmail(email: string): Promise<ClienteEntity>;
  abstract adquirirPorCPF(cpf: string): Promise<ClienteEntity>;
}
