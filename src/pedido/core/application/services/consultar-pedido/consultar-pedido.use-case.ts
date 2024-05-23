import { ConsultarPedidoDTO } from "src/pedido/core/domain/consultarPedidoDTO";

export abstract class IConsultarPedidoPorIdUseCase {
    abstract consultarPedidoPorId(idPedido: string): Promise<ConsultarPedidoDTO>;
}