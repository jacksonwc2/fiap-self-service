import { Pedido } from "src/pedido/adapter/driven/entity/pedido";
import { IPedidoRepository } from "../../repository/pedido-repository.port";
import { IAtualizarStatusPedidoUseCase } from "./atualizar-status-pedido.use-case";
import { AtualizarStatusPedidoDTO } from "src/pedido/core/domain/atualizarPedidoDTO";

export class AtualizarStatusPedidoUseCase implements IAtualizarStatusPedidoUseCase {
    constructor(private readonly pedidoRepository: IPedidoRepository) {}

    async atualizarStatusPedido(atualizarStatusPedidoDTO: AtualizarStatusPedidoDTO): Promise<Pedido> {
        return await this.pedidoRepository.atualizarStatusPedido(atualizarStatusPedidoDTO);
    }
}