import {PedidoEntity} from "./pedido.entity";

export abstract class IPedidoCacheRepository {
    abstract listarPedidosAtivos(): Promise<PedidoEntity[]>;
    abstract adicionarPedidoCache(pedido: PedidoEntity): void;
    abstract removerPedidoCache(id: string): void;
    abstract atualizarStatusPedidoCache(id: string, novoStatus: string): void;
}