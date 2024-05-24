import { PedidoDTO } from "src/pedido/core/domain/pedidoDTO";
import {AtualizarPedidoDTO} from "../../../domain/atualizarStatusPedidoDTO";

export abstract class IAtualizarStatusPedidoUseCase {
    abstract atualizarStatusPedido(id: string, atualizarStatusPedidoDTO: PedidoDTO): Promise<PedidoDTO>;
}