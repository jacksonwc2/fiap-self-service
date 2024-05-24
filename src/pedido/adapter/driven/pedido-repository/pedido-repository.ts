import {Inject, Injectable} from "@nestjs/common";
import { Repository } from 'typeorm';
import { PedidoEntity } from "src/pedido/adapter/driven/typeorm/pedido.entity";
import { IPedidoRepository } from "src/pedido/core/application/repository/pedido-repository.port";
import { Pedido } from "../entity/pedido";
import { TypeOrmPedidoMapper } from "src/pedido/adapter/driven/typeorm/typeorm-pedido.mapper";
import { ItemPedidoEntity } from "../typeorm/itemPedido.entity";
import { CadastrarPedidoDTO } from "src/pedido/core/domain/cadastrarPedidoDTO";
import { BaseMapper } from "../typeorm/base-mapper";
import {AtualizarPedidoDTO} from "../../../core/domain/atualizarStatusPedidoDTO";

@Injectable()
export class PedidoRepository implements IPedidoRepository {
    constructor(
        @Inject('PEDIDO_REPOSITORY')
        private readonly pedidoRepo: Repository<PedidoEntity>,
        @Inject('ITEM_PEDIDO_REPOSITORY')
        private readonly itemPedidoRepo: Repository<ItemPedidoEntity>
    ) {}

    async salvarPedido(cadastrarPedido: CadastrarPedidoDTO): Promise<Pedido> {

        cadastrarPedido.combo.forEach(element => {
            const itemPedidoEntity = TypeOrmPedidoMapper.toItemPedidoEntity(element);
            this.itemPedidoRepo.save(itemPedidoEntity); 
        });

        const pedidoEntity = BaseMapper.toEntity(cadastrarPedido);
        return await this.pedidoRepo.save(pedidoEntity);
    }

    async listarPorIdCliente(idCliente: string): Promise<Pedido[]> {
        const pedidoEntities = await this.pedidoRepo.find({ where: { idCliente }, relations: ['combo']});
        return pedidoEntities.map(pedidoEntity => TypeOrmPedidoMapper.toDomain(pedidoEntity));
    }

    async listarPedidos() {
        const pedidoEntities = await this.pedidoRepo.find({ relations: ['combo'] });
        return pedidoEntities.map(pedidoEntity => TypeOrmPedidoMapper.toDomain(pedidoEntity));
    }

    async buscarPorIdPedido(id: string): Promise<Pedido | null> {
        const pedidoEntity = await this.pedidoRepo.findOne({ where: { id }, relations: ['combo']})
        if(!pedidoEntity) {
            return null;
        }
        return TypeOrmPedidoMapper.toDomain(pedidoEntity);
    }

    async atualizarStatusPedido(atualizarStatusPedidoDTO: AtualizarPedidoDTO): Promise<Pedido> {
        const pedidoEntity = await this.pedidoRepo.findOne({ where: { id: atualizarStatusPedidoDTO.idPedido } });

        pedidoEntity.status = atualizarStatusPedidoDTO.status;

        return await this.pedidoRepo.save(pedidoEntity);
    }
}