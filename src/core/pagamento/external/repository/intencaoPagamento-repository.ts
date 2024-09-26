import {IIntencaoPagamentoRepository} from "./intencaoPagamento-repository.interface";
import {AtualizarIntencaoPagamentoDTO} from "../../dto/atualizarIntencaoPagamentoDTO";
import {IntencaoPagamentoEntity} from "./intencaoPagamento.entity.document";
import {MongoRepository} from "typeorm";
import {ObjectId} from "mongodb";
import {Inject} from "@nestjs/common";
import {IntencaoPagamento} from "../../entities/intencaoPagamento";

export class IntencaoRepository implements IIntencaoPagamentoRepository {

    constructor(
        @Inject("INTENCAO_PAGAMENTO_REPOSITORY")
        private readonly intencaoPedidoRepository: MongoRepository<IntencaoPagamentoEntity>
    ) {
    }

    async atualizarStatusPagamento(
        id: string,
        atualizarStatusPedidoDTO: AtualizarIntencaoPagamentoDTO
    ): Promise<IntencaoPagamentoEntity> {
        const intencaoPagamentoEntity = await this.intencaoPedidoRepository.findOneBy({_id: new ObjectId(id)});
        Object.assign(intencaoPagamentoEntity, atualizarStatusPedidoDTO)
        await this.intencaoPedidoRepository.save(intencaoPagamentoEntity);

        return intencaoPagamentoEntity;
    }

    async buscarPorIdPagamento(id: string): Promise<IntencaoPagamentoEntity> {
        const intencaoPagamentoEntity = await this.intencaoPedidoRepository.findOneBy({_id: new ObjectId(id)});

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