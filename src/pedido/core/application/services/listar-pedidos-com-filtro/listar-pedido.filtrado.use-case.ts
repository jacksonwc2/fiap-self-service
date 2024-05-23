import { ConsultarPedidoDTO } from "src/pedido/core/domain/consultarPedidoDTO";

export interface IListarPedidoPorIdClienteUseCase {
    listarPedidoPorIdCliente(idCliente: string): Promise<ConsultarPedidoDTO[]>;
}