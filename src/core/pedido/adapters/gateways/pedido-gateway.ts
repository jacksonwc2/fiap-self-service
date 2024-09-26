import { Injectable } from "@nestjs/common";
import { IPedidoRepository } from "../../external/repository/pedido-repository.interface";
import { Pedido } from "../../entities/pedido";
import { AtualizarPedidoDTO } from "../../dto/atualizarStatusPedidoDTO";
import {IPedidoCacheRepository} from "../../external/repository/pedido-cache-repository.interface";

@Injectable()
export class PedidoGateway {
  constructor(
      private readonly pedidoRepository: IPedidoRepository,
      private readonly pedidoCacheRepository: IPedidoCacheRepository
  ) {}

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

  async buscarPorIdPagamento(id: string): Promise<Pedido | null> {
    return await this.pedidoRepository.buscarPorIdPagamento(id);
  }

  async atualizarStatusPedido(
    id: string,
    atualizarStatusPedidoDTO: AtualizarPedidoDTO
  ): Promise<Pedido> {
    return await this.pedidoRepository.atualizarStatusPedido(id, atualizarStatusPedidoDTO);
  }

  async adicionarPedidoCache(
  pedido: Pedido
  ) {
    return this.pedidoCacheRepository.adicionarPedidoCache(pedido);
  }

  async removerPedidoCache(
      id: string
  ) {
    return this.pedidoCacheRepository.removerPedidoCache(id);
  }

  async listarPedidosAtivos(): Promise<Pedido[]> {
    return await this.pedidoCacheRepository.listarPedidosAtivos()
  }

  async atualizarStatusPedidoCache(id: string, novoStatus: string) {
    return this.pedidoCacheRepository.atualizarStatusPedidoCache(id, novoStatus);
  }
}
