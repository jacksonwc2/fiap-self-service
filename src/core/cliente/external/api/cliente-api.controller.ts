import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cliente } from '../../entities/cliente';
import { ClienteDTO } from '../../dto/clienteDTO';
import { ConsultarClientePorCPFController } from '../../adapters/controllers/consultar-cliente-controller';
import { CadastrarClienteController } from '../../adapters/controllers/cadastrar-cliente-controller';

@ApiTags('Clientes')
@Controller('clientes')
export class ClienteAPIController {
  constructor(
    private readonly cadastrarClienteController: CadastrarClienteController,
    private readonly consultarClientePorCPFController: ConsultarClientePorCPFController
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Cadastrar Cliente',
    description:
      'Para cadastrar um novo cliente é necessário informar os campos obrigatórios nome, e-mail e CPF(válido). Se o CPF ou e-mail informado já estiver cadastrado você será notificado.',
  })
  @ApiResponse({ status: 201, description: 'Cliente cadastrado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos para o cadastro.' })
  async cadastrarCliente(
    @Body() clienteDTO: ClienteDTO
  ): Promise<ClienteDTO> {
    return await this.cadastrarClienteController.execute(clienteDTO);
  }

  @Get(':cpf')
  @ApiOperation({
    summary: 'Buscar Cliente por CPF',
    description:
      'Verifica se o CPF informado está cadastrado e retorna os dados do Cliente.',
  })
  @ApiResponse({ status: 200,  description: 'Cliente encontrado.' })
  @ApiResponse({ status: 400, description: 'Cliente não encontrado.' })
  async buscarClientePorCPF(
    @Param('cpf') cpf: string
  ): Promise<Cliente> {
    return await this.consultarClientePorCPFController.execute(cpf);
  }
}
