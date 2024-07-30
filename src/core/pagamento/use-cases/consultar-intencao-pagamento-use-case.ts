import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {IntencaoPagamentoGateway} from "../adapters/gateways/intencaoPagamento-gateway";
import {IntencaoPagamento} from "../entities/intencaoPagamento";


@Injectable()
export class ConsultarIntencaoPagamentoPorIdUseCase {

    async execute(intencaoGateway: IntencaoPagamentoGateway, idIntencaoPagamento: string): Promise<IntencaoPagamento> {
        const intencao = await intencaoGateway.buscarPorIdIntencaoPagamento(idIntencaoPagamento);

        if(!intencao) {
            throw new HttpException(
                'IntencaoPagamento não encontrada, verifique a intenção que foi passado.',
                HttpStatus.NOT_FOUND
            );
        }

        return intencao;
    }
}