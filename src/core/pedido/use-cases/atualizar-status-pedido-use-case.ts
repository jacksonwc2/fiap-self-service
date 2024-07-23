import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AtualizarPedidoDTO } from "../dto/atualizarStatusPedidoDTO";
import { Pedido } from "../entities/pedido";
import { PedidoGateway } from "../adapters/gateways/pedido-gateway";

@Injectable()
export class AtualizarStatusPedidoUseCase {
  async execute(
    pedidoGateway: PedidoGateway,
    id: string,
    atualizarStatusPedidoDTO: AtualizarPedidoDTO
  ): Promise<Pedido> {
    const pedido = await pedidoGateway.buscarPorIdPedido(id);

    if (!pedido) {
      throw new HttpException("Pedido não encontrado.", HttpStatus.BAD_REQUEST);
    }

    try {
      return await pedidoGateway.atualizarStatusPedido(
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
