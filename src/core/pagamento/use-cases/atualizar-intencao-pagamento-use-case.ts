import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {IntencaoPagamentoGateway} from "../adapters/gateways/intencaoPagamento-gateway";
import {AtualizarIntencaoPagamentoDTO} from "../dto/atualizarIntencaoPagamentoDTO";
import {IntencaoPagamento} from "../entities/intencaoPagamento";


@Injectable()
export class AtualizarStatusIntencaoPagamentoUseCase {
    async execute(
        intencaoPagamentoGateway: IntencaoPagamentoGateway,
        id: string,
        atualizarStatusIntencaoPagamentoDTO: AtualizarIntencaoPagamentoDTO
    ): Promise<IntencaoPagamento> {
        const intencaoPagamento = await intencaoPagamentoGateway.buscarPorIdIntencaoPagamento(id);

        if (!intencaoPagamento) {
            throw new HttpException("IntencaoPagamento não encontrada.", HttpStatus.BAD_REQUEST);
        }

        try {
            return await intencaoPagamentoGateway.atualizarStatusIntencaoPagamento(
                id,
                atualizarStatusIntencaoPagamentoDTO
            );
        } catch (erro) {
            throw new HttpException(
                "Falha ao atualizar IntencaoPagamento. Revise os dados enviados e tente novamente.",
                HttpStatus.BAD_REQUEST
            );
        }
    }
}
