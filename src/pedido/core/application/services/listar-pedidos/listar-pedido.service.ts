import { Pedido } from "src/pedido/adapter/driven/entity/pedido";
import { IPedidoRepository } from "../../repository/pedido-repository.port";
import { IListarPedidoUseCase } from "./listar-pedido.use-case";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ListarPedidoUseCase implements IListarPedidoUseCase {
    constructor(private readonly pedidoRepository: IPedidoRepository) {}

    async listarPedido(): Promise<Pedido[]> {
        return await this.pedidoRepository.listarPedidos();
    }
}