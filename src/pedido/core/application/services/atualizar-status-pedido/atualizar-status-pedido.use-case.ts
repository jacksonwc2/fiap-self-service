import { Pedido } from "src/pedido/core/domain/pedido";
import {AtualizarPedidoDTO} from "../../../domain/atualizarStatusPedidoDTO";

export abstract class IAtualizarStatusPedidoUseCase {
    abstract atualizarStatusPedido(id: string, atualizarStatusPedidoDTO: AtualizarPedidoDTO): Promise<Pedido>;
}