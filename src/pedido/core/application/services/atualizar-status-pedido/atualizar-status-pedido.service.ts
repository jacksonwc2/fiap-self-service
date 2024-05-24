import { IPedidoRepository } from "../../repository/pedido-repository.port";
import { IAtualizarStatusPedidoUseCase } from "./atualizar-status-pedido.use-case";
import { PedidoDTO } from "src/pedido/core/domain/pedidoDTO";

export class AtualizarStatusPedidoUseCase implements IAtualizarStatusPedidoUseCase {
    constructor(private readonly pedidoRepository: IPedidoRepository) {}

    async atualizarStatusPedido(id: string, atualizarStatusPedidoDTO: PedidoDTO): Promise<PedidoDTO> {
        return await this.pedidoRepository.atualizarStatusPedido(id, atualizarStatusPedidoDTO);
    }
}