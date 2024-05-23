import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IListarPedidoPorIdClienteUseCase } from "./listar-pedido.filtrado.use-case";
import { ConsultarPedidoDTO } from "src/pedido/core/domain/consultarPedidoDTO";
import { IPedidoRepository } from "../../repository/pedido-repository.port";

@Injectable()
export class listarPedidoPorIdClienteUseCase implements IListarPedidoPorIdClienteUseCase {
    constructor(private readonly pedidoRepository: IPedidoRepository) {}

    async listarPedidoPorIdCliente(idCliente: string): Promise<ConsultarPedidoDTO[]> {
        const pedidos = await this.pedidoRepository.listarPorIdCliente(idCliente);

        if(!pedidos) {
            throw new HttpException('Nenhum pedido encontrado para esse cliente, verifique o cliente que foi passado.', HttpStatus.NOT_FOUND);
        }
        return pedidos;
    }
}