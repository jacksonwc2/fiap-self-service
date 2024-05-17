import { CadastrarClienteDTO } from '../../domain/cadastrarClienteDTO';
import { ClienteDTO } from '../../domain/ClienteDTO';

export abstract class IClienteRepository {
  abstract salvarCliente(clienteDTO: CadastrarClienteDTO): Promise<ClienteDTO>;
  abstract adquirirPorEmail(email: string): Promise<ClienteDTO>;
  abstract adquirirPorCPF(cpf: string): Promise<ClienteDTO>;
}
