import { ConsultarPedidoDTO } from "src/pedido/core/domain/consultarPedidoDTO";

export interface IConsultarPedidoPorIdUseCase {
    consultarPedidoPorId(idPedido: string): Promise<ConsultarPedidoDTO>;
}