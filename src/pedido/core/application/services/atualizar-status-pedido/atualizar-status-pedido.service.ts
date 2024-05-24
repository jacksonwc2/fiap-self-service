import { Pedido } from "src/pedido/adapter/driven/entity/pedido";
import { IPedidoRepository } from "../../repository/pedido-repository.port";
import { IAtualizarStatusPedidoUseCase } from "./atualizar-status-pedido.use-case";
import {AtualizarPedidoDTO} from "../../../domain/atualizarStatusPedidoDTO";

export class AtualizarStatusPedidoUseCase implements IAtualizarStatusPedidoUseCase {
    constructor(private readonly pedidoRepository: IPedidoRepository) {}

    async atualizarStatusPedido(atualizarStatusPedidoDTO: AtualizarPedidoDTO): Promise<Pedido> {
        return await this.pedidoRepository.atualizarStatusPedido(atualizarStatusPedidoDTO);
    }
}