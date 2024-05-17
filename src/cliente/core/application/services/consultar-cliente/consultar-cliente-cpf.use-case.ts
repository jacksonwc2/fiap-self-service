import { ClienteDTO } from 'src/cliente/core/domain/ClienteDTO';

export abstract class IConsultarClientePorCPFUseCase {
  abstract buscarClientePorCPF(cpf: string): Promise<ClienteDTO>;
}
