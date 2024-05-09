import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ICadastrarClienteUseCase } from 'src/cliente/core/application/services/cadastrar-cliente/cadastrar-cliente.use-case';
import { ClienteDTO } from 'src/cliente/core/domain/clienteDTO';

@ApiTags('clientes')
@Controller()
export class ClienteController {
  constructor(
    private readonly cadastrarClienteUSeCase: ICadastrarClienteUseCase,
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async cadastrarCliente(@Body() clienteDTO: ClienteDTO): Promise<ClienteDTO> {
    return await this.cadastrarClienteUSeCase.cadastrarCliente(clienteDTO);
  }
}
