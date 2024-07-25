import { Injectable } from "@nestjs/common";
import {IIntencaoPagamentoRepository} from "../../external/repository/intencaoPagamento-repository.interface";
import {IntencaoPagamento} from "../../entities/intencaoPagamento";
import {AtualizarIntencaoPagamentoDTO} from "../../dto/atualizarIntencaoPagamentoDTO";


@Injectable()
export class IntencaoPagamentoGateway {
    constructor(private readonly intencaoPagamentoRepository: IIntencaoPagamentoRepository) {}

    async salvarIntencaoPagamento(salvarIntencaoPagamento: IntencaoPagamento): Promise<IntencaoPagamento> {
        return await this.intencaoPagamentoRepository.salvarPagamento(salvarIntencaoPagamento);
    }

    async buscarPorIdIntencaoPagamento(id: string): Promise<IntencaoPagamento | null> {
        return await this.intencaoPagamentoRepository.buscarPorIdPagamento(id);
    }

    async atualizarStatusIntencaoPagamento(
        id: string,
        atualizarStatusIntencaoPagamentoDTO: AtualizarIntencaoPagamentoDTO
    ): Promise<IntencaoPagamento> {
        return await this.intencaoPagamentoRepository.atualizarStatusPagamento(id, atualizarStatusIntencaoPagamentoDTO);
    }
}
