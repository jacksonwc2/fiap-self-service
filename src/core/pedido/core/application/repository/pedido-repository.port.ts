import { Pedido } from "../../domain/pedido";
import { AtualizarPedidoDTO } from "../../domain/atualizarStatusPedidoDTO";

export abstract class IPedidoRepository {
    abstract salvarPedido(pedido: Pedido): Promise<Pedido>;
    abstract listarPorIdCliente(idCliente: string): Promise<Pedido[]>;
    abstract listarPedidos(): Promise<Pedido[]>;
    abstract buscarPorIdPedido(idPedido: string): Promise<Pedido>;
    abstract atualizarStatusPedido(id: string, atualizarStatusPedidoDTO: AtualizarPedidoDTO): Promise<Pedido>;
}