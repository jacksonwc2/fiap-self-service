import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ICadastrarClienteUseCase } from 'src/cliente/core/application/services/cadastrar-cliente/cadastrar-cliente.use-case';
import { IConsultarClientePorCPFUseCase } from 'src/cliente/core/application/services/consultar-cliente/consultar-cliente-cpf.use-case';
import { Cliente } from 'src/cliente/core/domain/Cliente';

@ApiTags('Clientes')
@Controller('clientes')
export class ClienteController {
  constructor(
    private readonly cadastrarClienteUSeCase: ICadastrarClienteUseCase,
    private readonly consultarClientePorCPFUseCase: IConsultarClientePorCPFUseCase
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
    @Body() cliente: Cliente
  ): Promise<Cliente> {
    return await this.cadastrarClienteUSeCase.cadastrarCliente(cliente);
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
    return await this.consultarClientePorCPFUseCase.buscarClientePorCPF(cpf);
  }
}
