import { ConsultarPedidoDTO } from "src/pedido/core/domain/consultarPedidoDTO";

export abstract class IListarPedidoUseCase {
    abstract listarPedido(): Promise<ConsultarPedidoDTO[]>;
}