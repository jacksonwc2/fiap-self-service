import { Pedido } from "src/pedido/adapter/driven/entity/pedido";
import { CadastrarPedidoDTO } from "../../domain/cadastrarPedidoDTO";
import { AtualizarStatusPedidoDTO } from "../../domain/atualizarPedidoDTO";

export interface IPedidoRepository {
    salvarPedido(pedido: CadastrarPedidoDTO): Promise<Pedido>;
    listarPorIdCliente(idCliente: string): Promise<Pedido[]>;
    listarPedidos(): Promise<Pedido[]>;
    buscarPorIdPedido(idPedido: string): Promise<Pedido>;
    atualizarStatusPedido(atualizarStatusPedidoDTO: AtualizarStatusPedidoDTO): Promise<Pedido>;
}