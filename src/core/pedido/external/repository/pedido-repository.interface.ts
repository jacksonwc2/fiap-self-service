import { AtualizarPedidoDTO } from "../../dto/atualizarStatusPedidoDTO";
import { PedidoEntity } from "./pedido.entity";

export abstract class IPedidoRepository {
    abstract salvarPedido(pedido: PedidoEntity): Promise<PedidoEntity>;
    abstract listarPorIdCliente(idCliente: string): Promise<PedidoEntity[]>;
    abstract listarPedidos(): Promise<PedidoEntity[]>;
    abstract buscarPorIdPedido(idPedido: string): Promise<PedidoEntity>;
    abstract buscarPorIdPagamento(idPagamento: string): Promise<PedidoEntity>;
    abstract atualizarStatusPedido(id: string, atualizarStatusPedidoDTO: AtualizarPedidoDTO): Promise<PedidoEntity>;
}