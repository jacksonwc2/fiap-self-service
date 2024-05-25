import { Pedido } from "src/pedido/core/domain/pedido";

export abstract class IListarPedidoPorIdClienteUseCase {
    abstract listarPedidoPorIdCliente(idCliente: string): Promise<Pedido[]>;
}