import { Pedido } from "src/pedido/core/domain/pedido";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IPedidoRepository } from "../../repository/pedido-repository.port";
import { IAtualizarStatusPedidoUseCase } from "./atualizar-status-pedido.use-case";
import { AtualizarPedidoDTO } from "src/pedido/core/domain/atualizarStatusPedidoDTO";

@Injectable()
export class AtualizarStatusPedidoUseCase
  implements IAtualizarStatusPedidoUseCase
{
  constructor(private readonly pedidoRepository: IPedidoRepository) {}

  async atualizarStatusPedido(
    id: string,
    atualizarStatusPedidoDTO: AtualizarPedidoDTO
  ): Promise<Pedido> {
    const pedido = await this.pedidoRepository.buscarPorIdPedido(id);

    if (!pedido) {
      throw new HttpException("Pedido não encontrado.", HttpStatus.BAD_REQUEST);
    }

    try {
      return await this.pedidoRepository.atualizarStatusPedido(
        id,
        atualizarStatusPedidoDTO
      );
    } catch (erro) {
      throw new HttpException(
        "Falha ao atualizar Pedido. Revise os dados enviados e tente novamente.",
        HttpStatus.BAD_REQUEST
      );
    }
  }
}
