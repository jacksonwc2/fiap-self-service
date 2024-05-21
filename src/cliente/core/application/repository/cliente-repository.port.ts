import { Cliente } from '../../domain/Cliente';

export abstract class IClienteRepository {
  abstract salvarCliente(cliente: Cliente): Promise<Cliente>;
  abstract adquirirPorEmail(email: string): Promise<Cliente>;
  abstract adquirirPorCPF(cpf: string): Promise<Cliente>;
}
