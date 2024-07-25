import { Injectable } from "@nestjs/common";
import {IntencaoPagamentoGateway} from "../adapters/gateways/intencaoPagamento-gateway";
import {IntencaoPagamento} from "../entities/intencaoPagamento";


@Injectable()
export class CadastrarIntencaoPagamentoUseCase {

    async execute(intencaoGateway: IntencaoPagamentoGateway): Promise<IntencaoPagamento> {
        const novaIntencao = new IntencaoPagamento();

        return await intencaoGateway.salvarIntencaoPagamento(novaIntencao);
    }
}
