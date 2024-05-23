import { Cliente } from 'src/cliente/core/domain/Cliente';

export abstract class ICadastrarClienteUseCase {
  abstract cadastrarCliente(cliente: Cliente): Promise<Cliente>;
}
