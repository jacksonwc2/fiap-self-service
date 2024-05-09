import { ClienteDTO } from '../../../domain/clienteDTO';

export abstract class ICadastrarClienteUseCase {
  abstract cadastrarCliente(clienteDTO: ClienteDTO): Promise<ClienteDTO>;
}
