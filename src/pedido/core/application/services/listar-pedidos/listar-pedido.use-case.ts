import { PedidoDTO } from "src/pedido/core/domain/pedidoDTO";

export abstract class IListarPedidoUseCase {
    abstract listarPedido(): Promise<PedidoDTO[]>;
}