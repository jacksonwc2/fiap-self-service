import { Pedido } from "src/pedido/core/domain/pedido";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IPedidoRepository } from "../../repository/pedido-repository.port";
import { IAtualizarStatusPedidoUseCase } from "./atualizar-status-pedido.use-case";
import { AtualizarPedidoDTO } from "src/pedido/core/domain/atualizarStatusPedidoDTO";

@Injectable()
export class AtualizarStatusPedidoUseCase implements IAtualizarStatusPedidoUseCase {
    constructor(private readonly pedidoRepository: IPedidoRepository) {}

    async atualizarStatusPedido(id: string, atualizarStatusPedidoDTO: AtualizarPedidoDTO): Promise<Pedido> {
        try {
            return await this.pedidoRepository.atualizarStatusPedido(id, atualizarStatusPedidoDTO);
        } catch (erro) {
            throw new HttpException(erro, HttpStatus.BAD_REQUEST)
        }
    }
}