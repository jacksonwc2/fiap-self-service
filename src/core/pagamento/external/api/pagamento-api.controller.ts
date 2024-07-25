import {
    Body,
    Controller,
    Get,
    Param,
    Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
    AtualizarStatusIntencaoPagamentoController
} from "../../adapters/controllers/atualizarIntencaoPagamento-controller";
import {
    ConsultarIntencaoPagamentoPorIdController
} from "../../adapters/controllers/consultarIntencaoPagamento-controller";
import {IntencaoPagamentoDTO} from "../../dto/intencaoPagamentoDTO";
import {AtualizarIntencaoPagamentoDTO} from "../../dto/atualizarIntencaoPagamentoDTO";

@ApiTags('Pagamentos')
@Controller('pagamentos')
export class PagamentosAPIController {
    constructor(
        private readonly atualizarStatusIntencaoPagamentoController: AtualizarStatusIntencaoPagamentoController,
        private readonly consultarIntencaoPagamentoPorIdController: ConsultarIntencaoPagamentoPorIdController
    ) {}

    @Post('/:id')
    @ApiOperation({
        summary: 'Atualizar status de Intenção de Pagamento',
        description: 'Webhook para atualização do status da Intenção de Pagamento'
    })
    @ApiResponse({ status: 201, description: 'Status da Intenção de Pagamento atualizado com sucesso.'})
    async atualizarStatusIntencaoPagamento(
        @Param('id') id: string, @Body() atualizarStatusIntencaoPagamento: AtualizarIntencaoPagamentoDTO
    ): Promise<IntencaoPagamentoDTO>
    {
        return await this.atualizarStatusIntencaoPagamentoController.execute(id, atualizarStatusIntencaoPagamento);
    }

    @Get('/:idIntencao')
    @ApiOperation({
        summary: 'Consulta uma Intenção de Pagamento pelo Id.',
        description: 'Retorna uma Intenção de Pagamento com base no id.',
    })
    @ApiResponse({ status: 200, description: 'Intenção encontrada.'})
    @ApiResponse({ status: 404, description: 'Intenção não encontrada.'})
    async consultarPedidoPorId(
        @Param('idIntencao') idIntencao: string
    ): Promise<IntencaoPagamentoDTO> {
        return await this.consultarIntencaoPagamentoPorIdController.execute(idIntencao);
    }

}