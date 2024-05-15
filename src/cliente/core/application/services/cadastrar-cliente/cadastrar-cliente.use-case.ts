import { Cliente } from 'src/cliente/adapter/driven/entity/cliente.entity';
import { CadastrarClienteDTO } from '../../../domain/cadastrarClienteDTO';

export abstract class ICadastrarClienteUseCase {
  abstract cadastrarCliente(clienteDTO: CadastrarClienteDTO): Promise<Cliente>;
}
