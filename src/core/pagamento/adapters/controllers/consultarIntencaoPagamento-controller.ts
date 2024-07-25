import { Injectable } from "@nestjs/common";
import {IntencaoPagamentoGateway} from "../gateways/intencaoPagamento-gateway";
import {ConsultarIntencaoPagamentoPorIdUseCase} from "../../use-cases/consultar-intencao-pagamento-use-case";
import {IntencaoPagamentoDTO} from "../../dto/intencaoPagamentoDTO";


@Injectable()
export class ConsultarIntencaoPagamentoPorIdController {
    constructor(
        private readonly intencaoPagamentoGateway: IntencaoPagamentoGateway,
        private readonly consultarIntencaoPagamentoPorIdUseCase: ConsultarIntencaoPagamentoPorIdUseCase
    ) {}

    async execute(idIntencaoPagamento: string): Promise<IntencaoPagamentoDTO> {
        const intencaoPagamento = await this.consultarIntencaoPagamentoPorIdUseCase.execute(
            this.intencaoPagamentoGateway,
            idIntencaoPagamento
        );
        const adapterPresenter: IntencaoPagamentoDTO = { ...intencaoPagamento };

        return adapterPresenter;
    }
}
