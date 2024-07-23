import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Pedido } from "../entities/pedido";
import { PedidoGateway } from "../adapters/gateways/pedido-gateway";

@Injectable()
export class ConsultarPedidoPorIdUseCase {

    async execute(pedidoGateway: PedidoGateway, idPedido: string): Promise<Pedido> {
        const pedido = await pedidoGateway.buscarPorIdPedido(idPedido);

        if(!pedido) {
            throw new HttpException('Pedido não encontrado, verifique o pedido que foi passado.', HttpStatus.NOT_FOUND);
        }
        
        return pedido;
    }
}