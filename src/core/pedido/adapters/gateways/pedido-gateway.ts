import { Injectable } from "@nestjs/common";
import { IPedidoRepository } from "../../external/repository/pedido-repository.interface";
import { Pedido } from "../../entities/pedido";
import { AtualizarPedidoDTO } from "../../dto/atualizarStatusPedidoDTO";

@Injectable()
export class PedidoGateway {
  constructor(private readonly pedidoRepository: IPedidoRepository) {}

  async salvarPedido(cadastrarPedido: Pedido): Promise<Pedido> {
   return await this.pedidoRepository.salvarPedido(cadastrarPedido);
  }

  async listarPorIdCliente(idCliente: string): Promise<Pedido[]> {
    return await this.pedidoRepository.listarPorIdCliente(idCliente);
  }

  async listarPedidos(): Promise<Pedido[]> {
    return await this.pedidoRepository.listarPedidos();
  }

  async buscarPorIdPedido(id: string): Promise<Pedido | null> {
    return await this.pedidoRepository.buscarPorIdPedido(id);
  }

  async atualizarStatusPedido(
    id: string,
    atualizarStatusPedidoDTO: AtualizarPedidoDTO
  ): Promise<Pedido> {
    return await this.pedidoRepository.atualizarStatusPedido(id, atualizarStatusPedidoDTO);
  }
}
