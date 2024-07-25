import { Injectable } from "@nestjs/common";
import {IntencaoPagamentoGateway} from "../gateways/intencaoPagamento-gateway";
import {AtualizarStatusIntencaoPagamentoUseCase} from "../../use-cases/atualizar-intencao-pagamento-use-case";
import {AtualizarIntencaoPagamentoDTO} from "../../dto/atualizarIntencaoPagamentoDTO";
import {IntencaoPagamentoDTO} from "../../dto/intencaoPagamentoDTO";

@Injectable()
export class AtualizarStatusIntencaoPagamentoController {

    constructor(
        private readonly intencaoPagamentoGateway: IntencaoPagamentoGateway,
        private readonly atualizarStatusIntencaoPagamentoUseCase: AtualizarStatusIntencaoPagamentoUseCase
    ) {}

    async execute(
        id: string,
        atualizarStatusIntencaoPagamentoDTO: AtualizarIntencaoPagamentoDTO
    ): Promise<IntencaoPagamentoDTO> {
        const intencaoPagamento = await this.atualizarStatusIntencaoPagamentoUseCase.execute(this.intencaoPagamentoGateway, id, atualizarStatusIntencaoPagamentoDTO);
        const adapterPresenter: IntencaoPagamentoDTO = {...intencaoPagamento};

        return adapterPresenter;
    }
}
