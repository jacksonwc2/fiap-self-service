import { Injectable } from "@nestjs/common";
import {IntencaoPagamentoGateway} from "../adapters/gateways/intencaoPagamento-gateway";
import {IntencaoPagamento} from "../entities/intencaoPagamento";
import {IPagamentoClient} from "../external/client/pagamento-client.interface";


@Injectable()
export class CadastrarIntencaoPagamentoUseCase {

    async execute(intencaoGateway: IntencaoPagamentoGateway, pagamentoClient: IPagamentoClient, valor: number): Promise<IntencaoPagamento> {
        const novaIntencao = new IntencaoPagamento();

        let result = await intencaoGateway.salvarIntencaoPagamento(novaIntencao);

        const pagamentoParceiro = await pagamentoClient.gerarPagamentoParceiro({

            creationDate: result.dataCriacao,

            externalReference: result.id,

            amount: valor,

            description: "Pagamento Mock",
        })

        result = await intencaoGateway.salvarIntencaoPagamento({
            ...result, qrCode: pagamentoParceiro.qrCode, idExterno: pagamentoParceiro.id
        })

        return result
    }
}
