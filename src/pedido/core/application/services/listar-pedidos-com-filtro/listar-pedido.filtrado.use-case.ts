import { PedidoDTO } from "src/pedido/core/domain/pedidoDTO";

export abstract class IListarPedidoPorIdClienteUseCase {
    abstract listarPedidoPorIdCliente(idCliente: string): Promise<PedidoDTO[]>;
}