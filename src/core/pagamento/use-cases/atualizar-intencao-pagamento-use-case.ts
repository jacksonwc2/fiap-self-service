import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {IntencaoPagamentoGateway} from "../adapters/gateways/intencaoPagamento-gateway";
import {AtualizarIntencaoPagamentoDTO} from "../dto/atualizarIntencaoPagamentoDTO";
import {IntencaoPagamento} from "../entities/intencaoPagamento";
import {PedidoGateway} from "../../pedido/adapters/gateways/pedido-gateway";
import {IntencaoPagamentoStatusType} from "../entities/intencaoPagamentoStatus-type.enum";
import {PedidoStatusType} from "../../pedido/entities/pedido-status-type.enum";
import {AtualizarPedidoDTO} from "../../pedido/dto/atualizarStatusPedidoDTO";


@Injectable()
export class AtualizarStatusIntencaoPagamentoUseCase {
    async execute(
        intencaoPagamentoGateway: IntencaoPagamentoGateway,
        pedidoGateway: PedidoGateway,
        id: string,
        atualizarStatusIntencaoPagamentoDTO: AtualizarIntencaoPagamentoDTO,
        atualizarStatusPedido: AtualizarPedidoDTO
    ): Promise<IntencaoPagamento> {
        const intencaoPagamento = await intencaoPagamentoGateway.buscarPorIdIntencaoPagamento(id);

        if (!intencaoPagamento) {
            throw new HttpException("IntencaoPagamento não encontrada.", HttpStatus.BAD_REQUEST);
        }

        try {
            atualizarStatusIntencaoPagamentoDTO.dataFinalizacao = new Date()
            const result = await intencaoPagamentoGateway.atualizarStatusIntencaoPagamento(
                id,
                atualizarStatusIntencaoPagamentoDTO
            );

            const pedido = await pedidoGateway.buscarPorIdPagamento(intencaoPagamento.id.toHexString());

            if (result.status == IntencaoPagamentoStatusType.FINALIZADO) {
                atualizarStatusPedido.status = PedidoStatusType.PREPARACAO
            } else {
                atualizarStatusPedido.status = PedidoStatusType.FINALIZADO
            }

            await pedidoGateway.atualizarStatusPedido(
                pedido.id,
                atualizarStatusPedido
            );

            return result
        } catch (erro) {
            throw new HttpException(
                "Falha ao atualizar IntencaoPagamento. Revise os dados enviados e tente novamente.",
                HttpStatus.BAD_REQUEST
            );
        }
    }
}
