import { Cliente } from 'src/cliente/adapter/driven/entity/cliente.entity';

export abstract class IConsultarClientePorCPFUseCase {
  abstract buscarClientePorCPF(cpf: string): Promise<Cliente>;
}
