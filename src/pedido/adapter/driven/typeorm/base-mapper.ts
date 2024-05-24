import { CadastrarItemPedidoDTO, CadastrarPedidoDTO } from "src/pedido/core/domain/cadastrarPedidoDTO";
import { PedidoEntity } from "./pedido.entity";
import { ItemPedidoEntity } from "./itemPedido.entity";

export class BaseMapper {
    static toEntity(cadastrarPedidoDTO: CadastrarPedidoDTO): PedidoEntity {
        const pedidoEntity = new PedidoEntity();
        pedidoEntity.id = cadastrarPedidoDTO.id;
        pedidoEntity.idCliente = cadastrarPedidoDTO.idCliente;
        pedidoEntity.valorTotal = cadastrarPedidoDTO.valorTotal;
        pedidoEntity.dataCriacao = cadastrarPedidoDTO.dataCriacao;
        pedidoEntity.status = cadastrarPedidoDTO.status;
        pedidoEntity.combo = cadastrarPedidoDTO.combo.map(item => this.toItemPedidoEntity(item));
        return pedidoEntity
    }

    static toItemPedidoEntity(cadastrarItemPedido: CadastrarItemPedidoDTO): ItemPedidoEntity {
        const itemPedidoEntity = new ItemPedidoEntity();
        itemPedidoEntity.id = cadastrarItemPedido.id;
        itemPedidoEntity.idPedido = cadastrarItemPedido.idPedido;
        itemPedidoEntity.idProduto = cadastrarItemPedido.idProduto;
        itemPedidoEntity.quantidade = cadastrarItemPedido.quantidade;
        itemPedidoEntity.valor = cadastrarItemPedido.valor;
        return itemPedidoEntity;
    }
}