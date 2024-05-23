import { ConsultarPedidoDTO } from "src/pedido/core/domain/consultarPedidoDTO";

export interface IListarPedidoUseCase {
    listarPedido(): Promise<ConsultarPedidoDTO[]>;
}