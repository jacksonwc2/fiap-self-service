import {Inject, Injectable} from "@nestjs/common";
import { Repository } from 'typeorm';
import { PedidoEntity } from "src/pedido/adapter/driven/typeorm/pedido.entity";
import { IPedidoRepository } from "src/pedido/core/application/repository/pedido-repository.port";
import { ItemPedidoEntity } from "../typeorm/itemPedido.entity";
import { PedidoDTO } from "src/pedido/core/domain/pedidoDTO";

@Injectable()
export class PedidoRepository implements IPedidoRepository {
    constructor(
        @Inject('PEDIDO_REPOSITORY')
        private readonly pedidoRepo: Repository<PedidoEntity>,
        @Inject('ITEM_PEDIDO_REPOSITORY')
        private readonly itemPedidoRepo: Repository<ItemPedidoEntity>
    ) {}

    async salvarPedido(cadastrarPedido: PedidoDTO): Promise<PedidoDTO> {
        const pedidoEntity: PedidoEntity = cadastrarPedido;
        await this.pedidoRepo.save(pedidoEntity);

        pedidoEntity.combo.forEach(element => {
            element.idPedido = pedidoEntity.id;
            const itemPedido: ItemPedidoEntity = element
            this.itemPedidoRepo.save(itemPedido); 
        });
        
        return pedidoEntity;
    }

    async listarPorIdCliente(idCliente: string): Promise<PedidoDTO[]> {
        return await this.pedidoRepo.find({ where: { idCliente }});
    }

    async listarPedidos(): Promise<PedidoDTO[]> {
        return await this.pedidoRepo.find();
    }

    async buscarPorIdPedido(id: string): Promise<PedidoDTO | null> {
        const pedidoEntity = await this.pedidoRepo.findOne({ where: { id }})
        if(!pedidoEntity) {
            return null;
        }
        return pedidoEntity;
    }

    async atualizarStatusPedido(id: string, atualizarStatusPedidoDTO: PedidoDTO): Promise<PedidoDTO> {
        await this.pedidoRepo.update(id, atualizarStatusPedidoDTO);
        return atualizarStatusPedidoDTO;
    }
}