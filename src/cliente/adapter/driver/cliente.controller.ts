import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ICadastrarClienteUseCase } from 'src/cliente/core/application/services/cadastrar-cliente/cadastrar-cliente.use-case';
import { CadastrarClienteDTO } from 'src/cliente/core/domain/cadastrarClienteDTO';
import { Cliente } from '../driven/entity/cliente.entity';
import { IConsultarClientePorCPFUseCase } from 'src/cliente/core/application/services/consultar-cliente/consultar-cliente-cpf.use-case';

@ApiTags('Clientes')
@Controller()
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
  @ApiResponse({ status: 400, description: 'CPF já cadastrado.' })
  @ApiResponse({ status: 400, description: 'E-mail já cadastrado.' })
  async cadastrarCliente(
    @Body() clienteDTO: CadastrarClienteDTO
  ): Promise<Cliente> {
    return await this.cadastrarClienteUSeCase.cadastrarCliente(clienteDTO);
  }

  @Get(':cpf')
  @ApiOperation({
    summary: 'Buscar Cliente por CPF',
    description:
      'Verifica se o CPF informado está cadastrado e retorna os dados do Cliente.',
  })
  @ApiResponse({ status: 200, description: 'Cliente encontrado.' })
  @ApiResponse({ status: 400, description: 'CPF inválido.' })
  @ApiResponse({ status: 400, description: 'CPF não cadastrado. Verifique se o CPF informado está correto ou cadastre um novo Cliente com este CPF.' })
  async buscarClientePorCPF(
    @Param('cpf') cpf: string
  ): Promise<Cliente> {
    return await this.consultarClientePorCPFUseCase.buscarClientePorCPF(cpf);
  }
}
