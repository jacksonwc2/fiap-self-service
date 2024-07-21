import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cliente } from '../entities/cliente';
import { ClienteGateway } from '../adapters/gateways/cliente-gateway';
import { ClienteDTO } from '../dto/clienteDTO';

@Injectable()
export class CadastrarClienteUseCase {

  async execute(clienteGateway: ClienteGateway, clienteDTO: ClienteDTO): Promise<Cliente> {

    // remove os caracteres alfanumericos do CPF
    const cpf = clienteDTO.cpf.replace(/[^0-9]/g,'');

    const cliente = new Cliente(clienteDTO.nome, clienteDTO.email, clienteDTO.cpf);

    // verifica se esse CPF já foi cadastrado
    if(await clienteGateway.adquirirPorCPF(cliente.cpf)){
      throw new HttpException('CPF já cadastrado.', HttpStatus.BAD_REQUEST);
    }

    // verifica se esse e-mail já foi cadastrado
    if(await clienteGateway.adquirirPorEmail(cliente.email)){
      throw new HttpException('E-mail já cadastrado.', HttpStatus.BAD_REQUEST);
    }

    return await clienteGateway.salvarCliente(cliente);
  }
}
