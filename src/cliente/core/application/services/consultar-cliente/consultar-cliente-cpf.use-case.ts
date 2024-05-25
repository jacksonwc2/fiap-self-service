import { Cliente } from 'src/cliente/core/domain/cliente';

export abstract class IConsultarClientePorCPFUseCase {
  abstract buscarClientePorCPF(cpf: string): Promise<Cliente>;
}
