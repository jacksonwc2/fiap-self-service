import { Pedido } from "src/core/pedido/core/domain/pedido";

export abstract class IListarPedidoPorIdClienteUseCase {
    abstract listarPedidoPorIdCliente(idCliente: string): Promise<Pedido[]>;
}