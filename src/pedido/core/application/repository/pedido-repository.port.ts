import { PedidoDTO } from "../../domain/pedidoDTO";

export abstract class IPedidoRepository {
    abstract salvarPedido(pedido: PedidoDTO): Promise<PedidoDTO>;
    abstract listarPorIdCliente(idCliente: string): Promise<PedidoDTO[]>;
    abstract listarPedidos(): Promise<PedidoDTO[]>;
    abstract buscarPorIdPedido(idPedido: string): Promise<PedidoDTO>;
    abstract atualizarStatusPedido(id: string, atualizarStatusPedidoDTO: PedidoDTO);
}