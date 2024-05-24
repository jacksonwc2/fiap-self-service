import { Pedido } from "src/pedido/adapter/driven/entity/pedido";
import { PedidoEntity } from "./pedido.entity";
import { ItemPedido } from "src/pedido/adapter/driven/entity/itemPedido";
import { ItemPedidoEntity } from "./itemPedido.entity";
import { ItemPedidoDTO, PedidoDTO } from "src/pedido/core/domain/pedidoDTO";

export class TypeOrmPedidoMapper {
    static toEntity(pedido: Pedido): PedidoEntity {
        const pedidoEntity = new PedidoEntity();
        pedidoEntity.id = pedido.id;
        pedidoEntity.idCliente = pedido.idCliente;
        pedidoEntity.valorTotal = pedido.valorTotal;
        pedidoEntity.dataCriacao = pedido.dataCriacao;
        pedidoEntity.status = pedido.status;
        pedidoEntity.combo = pedido.combo.map(item => this.toItemPedidoEntity(item));
        return pedidoEntity
    }

    static toItemPedidoEntity(itemPedido: ItemPedido): ItemPedidoEntity {
        const itemPedidoEntity = new ItemPedidoEntity();
        itemPedidoEntity.id = itemPedido.id;
        itemPedidoEntity.idPedido = itemPedido.idPedido;
        itemPedidoEntity.idProduto = itemPedido.idProduto;
        itemPedidoEntity.quantidade = itemPedido.quantidade;
        itemPedidoEntity.valor = itemPedido.valor;
        return itemPedidoEntity;
    }

    static toDTO(pedido: PedidoEntity): PedidoDTO {
        const pedidoEntity = new PedidoDTO();
        pedidoEntity.id = pedido.id;
        pedidoEntity.idCliente = pedido.idCliente;
        pedidoEntity.valorTotal = pedido.valorTotal;
        pedidoEntity.dataCriacao = pedido.dataCriacao;
        pedidoEntity.status = pedido.status;
        pedidoEntity.combo = pedido.combo.map(item => this.toItemPedidoDTO(item));
        return pedidoEntity
    }

    static toItemPedidoDTO(itemPedido: ItemPedidoEntity): ItemPedidoDTO {
        const itemPedidoEntity = new ItemPedidoDTO();
        itemPedidoEntity.id = itemPedido.id;
        itemPedidoEntity.idPedido = itemPedido.idPedido;
        itemPedidoEntity.idProduto = itemPedido.idProduto;
        itemPedidoEntity.quantidade = itemPedido.quantidade;
        itemPedidoEntity.valor = itemPedido.valor;
        return itemPedidoEntity;
    }

    static toDomain(pedidoEntity: PedidoEntity): Pedido {
        const combo = pedidoEntity.combo.map(this.toDomainItemPedido);
        return new Pedido(
            pedidoEntity.id,
            pedidoEntity.idPagamento,
            pedidoEntity.idCliente,
            pedidoEntity.valorTotal,
            pedidoEntity.dataCriacao, 
            pedidoEntity.status
        );
    }

    static toDomainItemPedido(itemPedidoEntity: ItemPedidoEntity): ItemPedido {
        return new ItemPedido(
            itemPedidoEntity.id,
            itemPedidoEntity.idPedido,
            itemPedidoEntity.idProduto,
            itemPedidoEntity.quantidade,
            itemPedidoEntity.valor,
        );
    }
}