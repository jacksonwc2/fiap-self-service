import { ConsultarPedidoDTO } from "src/pedido/core/domain/consultarPedidoDTO";

export abstract class IListarPedidoPorIdClienteUseCase {
    abstract listarPedidoPorIdCliente(idCliente: string): Promise<ConsultarPedidoDTO[]>;
}