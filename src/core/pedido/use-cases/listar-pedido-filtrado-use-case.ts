import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PedidoGateway } from "../adapters/gateways/pedido-gateway";
import { Pedido } from "../entities/pedido";

@Injectable()
export class ListarPedidoPorIdClienteUseCase {

    async execute(pedidoGateway: PedidoGateway, idCliente: string): Promise<Pedido[]> {
        const pedidos = await pedidoGateway.listarPorIdCliente(idCliente);

        if(!pedidos) {
            throw new HttpException('Nenhum pedido encontrado para esse cliente, verifique o cliente que foi passado.', HttpStatus.NOT_FOUND);
        }
        
        return pedidos;
    }
}