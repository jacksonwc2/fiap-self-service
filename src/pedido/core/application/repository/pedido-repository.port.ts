import { Pedido } from "src/pedido/adapter/driven/entity/pedido";
import { CadastrarPedidoDTO } from "../../domain/cadastrarPedidoDTO";
import {AtualizarPedidoDTO} from "../../domain/atualizarStatusPedidoDTO";

export abstract class IPedidoRepository {
    abstract salvarPedido(pedido: CadastrarPedidoDTO): Promise<Pedido>;
    abstract listarPorIdCliente(idCliente: string): Promise<Pedido[]>;
    abstract listarPedidos(): Promise<Pedido[]>;
    abstract buscarPorIdPedido(idPedido: string): Promise<Pedido>;
    abstract atualizarStatusPedido(atualizarStatusPedidoDTO: AtualizarPedidoDTO): Promise<Pedido>;
}