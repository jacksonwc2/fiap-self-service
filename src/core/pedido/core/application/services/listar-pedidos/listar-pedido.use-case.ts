import { Pedido } from "src/core/pedido/core/domain/pedido";

export abstract class IListarPedidoUseCase {
    abstract listarPedido(): Promise<Pedido[]>;
}