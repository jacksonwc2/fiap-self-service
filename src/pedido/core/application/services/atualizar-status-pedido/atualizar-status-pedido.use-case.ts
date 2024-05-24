import { Pedido } from "src/pedido/adapter/driven/entity/pedido";
import {AtualizarPedidoDTO} from "../../../domain/atualizarStatusPedidoDTO";

export abstract class IAtualizarStatusPedidoUseCase {
    abstract atualizarStatusPedido(atualizarStatusPedidoDTO: AtualizarPedidoDTO): Promise<Pedido>;
}