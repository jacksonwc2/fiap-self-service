import { Pedido } from "src/pedido/core/domain/pedido";

export abstract class IConsultarPedidoPorIdUseCase {
    abstract consultarPedidoPorId(idPedido: string): Promise<Pedido>;
}