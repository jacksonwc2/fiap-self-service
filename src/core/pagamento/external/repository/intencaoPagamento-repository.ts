import {IIntencaoPagamentoRepository} from "./intencaoPagamento-repository.interface";
import {AtualizarIntencaoPagamentoDTO} from "../../dto/atualizarIntencaoPagamentoDTO";
import {IntencaoPagamentoEntity} from "./intencaoPagamento.entity";
import {Repository} from "typeorm";
import {Inject} from "@nestjs/common";
import {IntencaoPagamento} from "../../entities/intencaoPagamento";

export class IntencaoRepository implements IIntencaoPagamentoRepository {

    constructor(
        @Inject("INTENCAO_PAGAMENTO_REPOSITORY")
        private readonly intencaoPedidoRepository: Repository<IntencaoPagamentoEntity>
    ) {
    }

    async atualizarStatusPagamento(
        id: string,
        atualizarStatusPedidoDTO: AtualizarIntencaoPagamentoDTO
    ): Promise<IntencaoPagamentoEntity> {
        const intencaoPagamentoEntity = await this.intencaoPedidoRepository.findOneBy({ id });
        intencaoPagamentoEntity.status = atualizarStatusPedidoDTO.status;
        await this.intencaoPedidoRepository.update({ id }, intencaoPagamentoEntity);

        return intencaoPagamentoEntity;
    }

    async buscarPorIdPagamento(id: string): Promise<IntencaoPagamentoEntity> {
        const intencaoPagamentoEntity = await this.intencaoPedidoRepository.findOneBy({ id });

        if (!intencaoPagamentoEntity) {
            return null;
        }

        return intencaoPagamentoEntity;
    }

    async salvarPagamento(pagamento: IntencaoPagamento): Promise<IntencaoPagamentoEntity> {
        const intencaoPagamentoEntity: IntencaoPagamentoEntity = pagamento;
        await this.intencaoPedidoRepository.save(intencaoPagamentoEntity);

        return intencaoPagamentoEntity;
    }
}