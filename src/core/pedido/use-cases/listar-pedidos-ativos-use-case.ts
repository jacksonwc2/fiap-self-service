import { Injectable } from "@nestjs/common";
import { Pedido } from "../entities/pedido";
import { PedidoGateway } from "../adapters/gateways/pedido-gateway";

@Injectable()
export class ListarPedidosAtivosUseCase {

    async execute(pedidoGateway: PedidoGateway): Promise<Pedido[]> {
        return await pedidoGateway.listarPedidosAtivos();
    }
}