import { Not, Repository } from "typeorm";
import { Inject, Injectable } from "@nestjs/common";
import { IPedidoRepository } from "./pedido-repository.interface";
import { PedidoEntity } from "./pedido.entity";
import { ItemPedidoEntity } from "./itemPedido.entity";
import { Pedido } from "../../entities/pedido";
import { AtualizarPedidoDTO } from "../../dto/atualizarStatusPedidoDTO";

@Injectable()
export class PedidoRepository implements IPedidoRepository {
    constructor(
        @Inject("PEDIDO_REPOSITORY")
        private readonly pedidoRepo: Repository<PedidoEntity>,
        @Inject("ITEM_PEDIDO_REPOSITORY")
        private readonly itemPedidoRepo: Repository<ItemPedidoEntity>
    ) {}

    async salvarPedido(cadastrarPedido: Pedido): Promise<PedidoEntity> {
        const pedidoEntity: PedidoEntity = cadastrarPedido;
        await this.pedidoRepo.save(pedidoEntity);

        pedidoEntity.combo.forEach((element) => {
            element.idPedido = pedidoEntity.id;
            const itemPedido: ItemPedidoEntity = element;
            this.itemPedidoRepo.save(itemPedido);
        });

        return pedidoEntity;
    }

    async listarPorIdCliente(idCliente: string): Promise<PedidoEntity[]> {
        return await this.pedidoRepo.find({
            where: { idCliente },
            relations: ["combo"],
        });
    }

    async listarPedidos(): Promise<PedidoEntity[]> {
        return await this.pedidoRepo.find({
            relations: ["combo"],
            where: {
                status: Not("FINALIZADO"),
            },
            order: {
                status: 'DESC',
                dataCriacao: 'ASC'
            }
        });
    }

    async buscarPorIdPedido(id: string): Promise<PedidoEntity | null> {
        const pedidoEntity = await this.pedidoRepo.findOne({
            where: { id },
            relations: ["combo"],
        });
        if (!pedidoEntity) {
            return null;
        }
        return pedidoEntity;
    }

    async atualizarStatusPedido(
        id: string,
        atualizarStatusPedidoDTO: AtualizarPedidoDTO
    ): Promise<PedidoEntity> {
        const pedidoEntity = await this.pedidoRepo.findOne({
            where: { id },
        });
        pedidoEntity.status = atualizarStatusPedidoDTO.status;
        await this.pedidoRepo.update({ id }, pedidoEntity);
        return pedidoEntity;
    }

    async buscarPorIdPagamento(idPagamento: string): Promise<PedidoEntity> {
        const pedidoEntity = await this.pedidoRepo.findOne({
            where: {idPagamento},
            relations: ["combo"],
        });
        if (!pedidoEntity) {
            return null;
        }
        return pedidoEntity;
    }
}
