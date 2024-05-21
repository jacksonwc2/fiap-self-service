import { Cliente } from 'src/cliente/core/domain/Cliente';

export abstract class IConsultarClientePorCPFUseCase {
  abstract buscarClientePorCPF(cpf: string): Promise<Cliente>;
}
