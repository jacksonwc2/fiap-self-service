import { Cliente } from 'src/cliente/core/domain/cliente';

export abstract class ICadastrarClienteUseCase {
  abstract cadastrarCliente(cliente: Cliente): Promise<Cliente>;
}
