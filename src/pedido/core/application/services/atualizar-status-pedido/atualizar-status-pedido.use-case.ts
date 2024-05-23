import { Pedido } from "src/pedido/adapter/driven/entity/pedido";
import { AtualizarStatusPedidoDTO } from "src/pedido/core/domain/atualizarPedidoDTO";

export interface IAtualizarStatusPedidoUseCase {
    atualizarStatusPedido(atualizarStatusPedidoDTO: AtualizarStatusPedidoDTO): Promise<Pedido>;
}