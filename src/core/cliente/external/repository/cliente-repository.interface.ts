import { Cliente } from '../../entities/cliente';

export abstract class IClienteRepository {
  abstract salvarCliente(cliente: Cliente): Promise<Cliente>;
  abstract adquirirPorID(id: string): Promise<Cliente>;
  abstract adquirirPorEmail(email: string): Promise<Cliente>;
  abstract adquirirPorCPF(cpf: string): Promise<Cliente>;
}
