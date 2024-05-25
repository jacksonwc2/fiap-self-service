import { Pedido } from "src/pedido/core/domain/pedido";

export abstract class IListarPedidoUseCase {
    abstract listarPedido(): Promise<Pedido[]>;
}