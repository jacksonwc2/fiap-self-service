import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ICadastrarPedidoUseCase } from 'src/pedido/core/application/services/cadastrar-pedido/cadastrar-pedido.use-case';
import { CadastrarPedidoDTO } from 'src/pedido/core/domain/cadastrarPedidoDTO';
import { Pedido } from '../driven/entity/pedido';
import { IConsultarPedidoPorIdUseCase } from 'src/pedido/core/application/services/consultar-pedido/consultar-pedido.use-case';
import { ConsultarPedidoDTO } from 'src/pedido/core/domain/consultarPedidoDTO';
import { IListarPedidoUseCase } from 'src/pedido/core/application/services/listar-pedidos/listar-pedido.use-case';
import { IListarPedidoPorIdClienteUseCase } from 'src/pedido/core/application/services/listar-pedidos-com-filtro/listar-pedido.filtrado.use-case';
import { IAtualizarStatusPedidoUseCase } from 'src/pedido/core/application/services/atualizar-status-pedido/atualizar-status-pedido.use-case';
import {AtualizarPedidoDTO} from "../../core/domain/atualizarStatusPedidoDTO";

@ApiTags('Pedidos')
@Controller('Pedido')
export class PedidoController {
    constructor(
        private readonly cadastrarPedidoUseCase: ICadastrarPedidoUseCase,
        private readonly consultarPedidoPorIdUseCase: IConsultarPedidoPorIdUseCase,
        private readonly listarPedidoUseCase: IListarPedidoUseCase,
        private readonly listarPedidoPorIdClienteUseCase: IListarPedidoPorIdClienteUseCase,
        private readonly atualizarStatusPedidoUseCase: IAtualizarStatusPedidoUseCase,
    ) {}

    @Post()
    @ApiOperation({
        summary: 'Cadastrar Pedido',
        description:
            ''
    })
    @ApiResponse({ status: 201, description: 'Pedido cadastrado com sucesso.'})
    @ApiResponse({ status: 400, description: 'Combo obrigatório.'})
    async cadastrarPedido(
        @Body() pedidoDTO: CadastrarPedidoDTO
    ): Promise<Pedido> {
        return await this.cadastrarPedidoUseCase.cadastrarPedido(pedidoDTO);
    }

    @Get(':idPedido')
    @ApiOperation({
        summary: '',
        description: '',
    })
    @ApiResponse({ status: 200, description: 'Pedido encontrado.'})
    @ApiResponse({ status: 404, description: 'Pedido não encontrado.'})
    async consultarPedidoPorId(
        @Param('idPedido') idPedido: string
    ): Promise<ConsultarPedidoDTO> {
        return await this.consultarPedidoPorIdUseCase.consultarPedidoPorId(idPedido);
    }

    @Get('listarPedidos')
    @ApiOperation({
        summary: '',
        description: '',
    })
    @ApiResponse({ status: 200, description: 'Pedidos encontrados.'})
    async listarPedidos(
    ): Promise<ConsultarPedidoDTO[]> {
        return await this.listarPedidoUseCase.listarPedido();
    }

    @Get('listarPedidos/:idCliente')
    @ApiOperation({
        summary: '',
        description: '',
    })
    @ApiResponse({ status: 200, description: 'Pedidos encontrados.'})
    @ApiResponse({ status: 200, description: 'Nenhum pedido encontrado para esse cliente.'})
    async listarPedidoPorIdCliente(
        @Param('idCliente') idCliente: string
    ): Promise<ConsultarPedidoDTO[]> {
        return await this.listarPedidoPorIdClienteUseCase.listarPedidoPorIdCliente(idCliente);
    }

    @Patch()
    @ApiOperation({
        summary: 'Atualizar Status de Pedido',
        description:
            ''
    })
    @ApiResponse({ status: 201, description: 'Pedido cadastrado com sucesso.'})
    @ApiResponse({ status: 400, description: 'Combo obrigatório.'})
    async atualizarStatusPedido(
        @Body() atualizarStatusPedido: AtualizarPedidoDTO
    ): Promise<Pedido> {
        return await this.atualizarStatusPedidoUseCase.atualizarStatusPedido(atualizarStatusPedido);
    }
}