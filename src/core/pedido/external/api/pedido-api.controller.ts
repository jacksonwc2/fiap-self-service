import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CadastrarPedidoController } from '../../adapters/controllers/cadastrar-pedido-controller';
import { ConsultarPedidoPorIdController } from '../../adapters/controllers/consultar-pedido-controller';
import { ListarPedidoController } from '../../adapters/controllers/listar-pedido-controller';
import { ListarPedidoPorIdClienteController } from '../../adapters/controllers/listar-pedido-filtrado-controller';
import { AtualizarStatusPedidoController } from '../../adapters/controllers/atualizar-status-pedido-controller';
import { PedidoDTO } from '../../dto/pedidoDTO';
import { AtualizarPedidoDTO } from '../../dto/atualizarStatusPedidoDTO';
import {ListarPedidosAtivosController} from "../../adapters/controllers/listar-pedidos-ativos-controller";

@ApiTags('Pedidos')
@Controller('pedidos')
export class PedidoAPIController {
    constructor(
        private readonly cadastrarPedidoController: CadastrarPedidoController,
        private readonly consultarPedidoPorIdController: ConsultarPedidoPorIdController,
        private readonly listarPedidoController: ListarPedidoController,
        private readonly listarPedidosAtivosController: ListarPedidosAtivosController,
        private readonly listarPedidoPorIdClienteController: ListarPedidoPorIdClienteController,
        private readonly atualizarStatusPedidoController: AtualizarStatusPedidoController,
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
        @Body() pedidoDTO: PedidoDTO
    ): Promise<PedidoDTO> {

        return await this.cadastrarPedidoController.execute(pedidoDTO);
    }

    @Get('/listarPedidos')
    @ApiOperation({
        summary: 'Lista pedidos.',
        description: 'Retorna todos os pedidos cadastrados.',
    })
    @ApiResponse({ status: 200, description: 'Pedidos encontrados.'})
    async listarPedidos(
    ): Promise<PedidoDTO[]> {
        return await this.listarPedidoController.execute();
    }

    @Get('/listarPedidosAtivos')
    @ApiOperation({
        summary: 'Lista pedidos ativos.',
        description: 'Retorna todos os pedidos ativos.',
    })
    @ApiResponse({ status: 200, description: 'Pedidos encontrados.'})
    async listarPedidosAtivos(
    ): Promise<PedidoDTO[]> {
        return await this.listarPedidosAtivosController.execute();
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
    ): Promise<PedidoDTO> {
        return await this.consultarPedidoPorIdController.execute(idPedido);
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
    ): Promise<PedidoDTO[]> {
        return await this.listarPedidoPorIdClienteController.execute(idCliente);
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
    ): Promise<PedidoDTO> {
        return await this.atualizarStatusPedidoController.execute(id, atualizarStatusPedido);
    }
}