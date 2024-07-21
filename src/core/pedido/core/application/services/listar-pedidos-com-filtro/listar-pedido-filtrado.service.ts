import { Pedido } from "src/core/pedido/core/domain/pedido";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IPedidoRepository } from "../../repository/pedido-repository.port";
import { IListarPedidoPorIdClienteUseCase } from "./listar-pedido.filtrado.use-case";

@Injectable()
export class ListarPedidoPorIdClienteUseCase implements IListarPedidoPorIdClienteUseCase {
    constructor(private readonly pedidoRepository: IPedidoRepository) {}

    async listarPedidoPorIdCliente(idCliente: string): Promise<Pedido[]> {
        const pedidos = await this.pedidoRepository.listarPorIdCliente(idCliente);

        if(!pedidos) {
            throw new HttpException('Nenhum pedido encontrado para esse cliente, verifique o cliente que foi passado.', HttpStatus.NOT_FOUND);
        }
        return pedidos;
    }
}