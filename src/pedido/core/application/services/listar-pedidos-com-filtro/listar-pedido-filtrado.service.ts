import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IListarPedidoPorIdClienteUseCase } from "./listar-pedido.filtrado.use-case";
import { IPedidoRepository } from "../../repository/pedido-repository.port";
import { PedidoDTO } from "src/pedido/core/domain/pedidoDTO";

@Injectable()
export class ListarPedidoPorIdClienteUseCase implements IListarPedidoPorIdClienteUseCase {
    constructor(private readonly pedidoRepository: IPedidoRepository) {}

    async listarPedidoPorIdCliente(idCliente: string): Promise<PedidoDTO[]> {
        const pedidos = await this.pedidoRepository.listarPorIdCliente(idCliente);

        if(!pedidos) {
            throw new HttpException('Nenhum pedido encontrado para esse cliente, verifique o cliente que foi passado.', HttpStatus.NOT_FOUND);
        }
        return pedidos;
    }
}