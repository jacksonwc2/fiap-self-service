import { ClienteDTO } from '../../domain/clienteDTO';

export abstract class IClienteRepository {
  abstract salvarCliente(clienteDTO: ClienteDTO): Promise<ClienteDTO>;
}
