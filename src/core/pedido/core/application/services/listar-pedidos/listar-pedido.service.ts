import { Injectable } from "@nestjs/common";
import { Pedido } from "src/core/pedido/core/domain/pedido";
import { IListarPedidoUseCase } from "./listar-pedido.use-case";
import { IPedidoRepository } from "../../repository/pedido-repository.port";

@Injectable()
export class ListarPedidoUseCase implements IListarPedidoUseCase {
    constructor(private readonly pedidoRepository: IPedidoRepository) {}

    async listarPedido(): Promise<Pedido[]> {
        return await this.pedidoRepository.listarPedidos();
    }
}