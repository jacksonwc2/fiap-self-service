import { Injectable } from "@nestjs/common";
import { Pedido } from "../entities/pedido";
import { PedidoGateway } from "../adapters/gateways/pedido-gateway";

@Injectable()
export class ListarPedidoUseCase {

    async execute(pedidoGateway: PedidoGateway): Promise<Pedido[]> {
        return await pedidoGateway.listarPedidos();
    }
}