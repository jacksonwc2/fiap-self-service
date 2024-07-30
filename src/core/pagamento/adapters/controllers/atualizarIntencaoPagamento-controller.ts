import { Injectable } from "@nestjs/common";
import {IntencaoPagamentoGateway} from "../gateways/intencaoPagamento-gateway";
import {AtualizarStatusIntencaoPagamentoUseCase} from "../../use-cases/atualizar-intencao-pagamento-use-case";
import {AtualizarIntencaoPagamentoDTO} from "../../dto/atualizarIntencaoPagamentoDTO";
import {IntencaoPagamentoDTO} from "../../dto/intencaoPagamentoDTO";
import {PedidoGateway} from "../../../pedido/adapters/gateways/pedido-gateway";
import {AtualizarPedidoDTO} from "../../../pedido/dto/atualizarStatusPedidoDTO";

@Injectable()
export class AtualizarStatusIntencaoPagamentoController {

    constructor(
        private readonly intencaoPagamentoGateway: IntencaoPagamentoGateway,
        private readonly atualizarStatusIntencaoPagamentoUseCase: AtualizarStatusIntencaoPagamentoUseCase,
        private readonly pedidoGateway: PedidoGateway,
    ) {}

    async execute(
        id: string,
        atualizarStatusIntencaoPagamentoDTO: AtualizarIntencaoPagamentoDTO
    ): Promise<IntencaoPagamentoDTO> {

        const intencaoPagamento = await this.atualizarStatusIntencaoPagamentoUseCase.execute(this.intencaoPagamentoGateway, this.pedidoGateway, id, atualizarStatusIntencaoPagamentoDTO, new AtualizarPedidoDTO());
        const adapterPresenter: IntencaoPagamentoDTO = {...intencaoPagamento};

        return adapterPresenter;
    }
}
