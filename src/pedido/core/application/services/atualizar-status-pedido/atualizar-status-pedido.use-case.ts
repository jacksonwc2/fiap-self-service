import { Pedido } from "src/pedido/adapter/driven/entity/pedido";
import { AtualizarStatusPedidoDTO } from "src/pedido/core/domain/atualizarStatusPedidoDTO";

export abstract class IAtualizarStatusPedidoUseCase {
    abstract atualizarStatusPedido(atualizarStatusPedidoDTO: AtualizarStatusPedidoDTO): Promise<Pedido>;
}