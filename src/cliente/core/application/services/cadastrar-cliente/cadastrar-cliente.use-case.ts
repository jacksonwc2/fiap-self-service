import { CadastrarClienteDTO } from '../../../domain/cadastrarClienteDTO';
import { ClienteDTO } from 'src/cliente/core/domain/ClienteDTO';

export abstract class ICadastrarClienteUseCase {
  abstract cadastrarCliente(clienteDTO: CadastrarClienteDTO): Promise<ClienteDTO>;
}
