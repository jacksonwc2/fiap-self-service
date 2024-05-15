import { Cliente } from 'src/cliente/adapter/driven/entity/cliente.entity';
import { CadastrarClienteDTO } from '../../domain/cadastrarClienteDTO';

export abstract class IClienteRepository {
  abstract salvarCliente(clienteDTO: CadastrarClienteDTO): Promise<Cliente>;
  abstract getByEmail(email: string): Promise<Cliente>;
  abstract getByCPF(cpf: string): Promise<Cliente>;
}
