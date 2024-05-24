import { IPedidoRepository } from "../../repository/pedido-repository.port";
import { IListarPedidoUseCase } from "./listar-pedido.use-case";
import { Injectable } from "@nestjs/common";
import { PedidoDTO } from "src/pedido/core/domain/pedidoDTO";

@Injectable()
export class ListarPedidoUseCase implements IListarPedidoUseCase {
    constructor(private readonly pedidoRepository: IPedidoRepository) {}

    async listarPedido(): Promise<PedidoDTO[]> {
        return await this.pedidoRepository.listarPedidos();
    }
}