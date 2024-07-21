import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { Pedido } from 'src/core/pedido/core/domain/pedido';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AtualizarPedidoDTO } from "../../core/domain/atualizarStatusPedidoDTO";
import { IListarPedidoUseCase } from 'src/core/pedido/core/application/services/listar-pedidos/listar-pedido.use-case';
import { ICadastrarPedidoUseCase } from 'src/core/pedido/core/application/services/cadastrar-pedido/cadastrar-pedido.use-case';
import { IConsultarPedidoPorIdUseCase } from 'src/core/pedido/core/application/services/consultar-pedido/consultar-pedido.use-case';
import { IAtualizarStatusPedidoUseCase } from 'src/core/pedido/core/application/services/atualizar-status-pedido/atualizar-status-pedido.use-case';
import { IListarPedidoPorIdClienteUseCase } from 'src/core/pedido/core/application/services/listar-pedidos-com-filtro/listar-pedido.filtrado.use-case';

@ApiTags('Pedidos')
@Controller('pedidos')
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
            'Informe o combo e dados do pedido. O campo "idPagamento" pode ser preenchido com um MOCK de pagamento. Se o cliente optar por não se identificar o campo "idCliente" não precisa ser preenchido'
    })
    @ApiResponse({ status: 201, description: 'Pedido cadastrado com sucesso.'})
    @ApiResponse({ status: 400, description: 'Combo obrigatório.'})
    async cadastrarPedido(
        @Body() pedidoDTO: Pedido
    ): Promise<Pedido> {
        return await this.cadastrarPedidoUseCase.cadastrarPedido(pedidoDTO);
    }

    @Get('/listarPedidos')
    @ApiOperation({
        summary: 'Lista pedidos.',
        description: 'Retorna todos os pedidos cadastrados.',
    })
    @ApiResponse({ status: 200, description: 'Pedidos encontrados.'})
    async listarPedidos(
    ): Promise<Pedido[]> {
        return await this.listarPedidoUseCase.listarPedido();
    }

    @Get('/:idPedido')
    @ApiOperation({
        summary: 'Consulta um pedido pelo Id.',
        description: 'Retorna um pedido com base no id.',
    })
    @ApiResponse({ status: 200, description: 'Pedido encontrado.'})
    @ApiResponse({ status: 404, description: 'Pedido não encontrado.'})
    async consultarPedidoPorId(
        @Param('idPedido') idPedido: string
    ): Promise<Pedido> {
        return await this.consultarPedidoPorIdUseCase.consultarPedidoPorId(idPedido);
    }

    @Get('/listarPedidos/:idCliente')
    @ApiOperation({
        summary: 'Lista pedidos de um cliente.',
        description: 'Com base no idCliente passado na rota, retorna os todos os pedidos.',
    })
    @ApiResponse({ status: 200, description: 'Pedidos encontrados.'})
    @ApiResponse({ status: 200, description: 'Nenhum pedido encontrado para esse cliente.'})
    async listarPedidoPorIdCliente(
        @Param('idCliente') idCliente: string
    ): Promise<Pedido[]> {
        return await this.listarPedidoPorIdClienteUseCase.listarPedidoPorIdCliente(idCliente);
    }

    @Patch('/:id')
    @ApiOperation({
        summary: 'Atualizar Status de Pedido',
        description:
            'Atualiza apenas status do pedido, os status possíveis são [RECEBIDO, PREPARACAO, PRONTO, FINALIZADO]'
    })
    @ApiResponse({ status: 201, description: 'Status do pedido atualizado com sucesso.'})
    async atualizarStatusPedido(
        @Param('id') id: string, @Body() atualizarStatusPedido: AtualizarPedidoDTO
    ): Promise<Pedido> {
        return await this.atualizarStatusPedidoUseCase.atualizarStatusPedido(id, atualizarStatusPedido);
    }
}