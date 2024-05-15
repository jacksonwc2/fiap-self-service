import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ICadastrarClienteUseCase } from 'src/cliente/core/application/services/cadastrar-cliente/cadastrar-cliente.use-case';
import { CadastrarClienteDTO } from 'src/cliente/core/domain/cadastrarClienteDTO';
import { Cliente } from '../driven/entity/cliente.entity';

@ApiTags('Clientes')
@Controller()
export class ClienteController {
  constructor(
    private readonly cadastrarClienteUSeCase: ICadastrarClienteUseCase,
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Cliente cadastrado com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'CPF já cadastrado.' })
  @ApiResponse({ status: 400, description: 'E-mail já cadastrado.' })
  async cadastrarCliente(@Body() clienteDTO: CadastrarClienteDTO): Promise<Cliente> {
    return await this.cadastrarClienteUSeCase.cadastrarCliente(clienteDTO);
  }
}
