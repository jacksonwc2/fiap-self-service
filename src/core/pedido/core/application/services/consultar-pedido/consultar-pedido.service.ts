import { Pedido } from "src/core/pedido/core/domain/pedido";
import { IConsultarPedidoPorIdUseCase } from "./consultar-pedido.use-case";
import { IPedidoRepository } from "../../repository/pedido-repository.port";
import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";

@Injectable()
export class ConsultarPedidoPorIdUseCase implements IConsultarPedidoPorIdUseCase {
    constructor(private readonly pedidoRepository: IPedidoRepository) {}

    async consultarPedidoPorId(idPedido: string): Promise<Pedido> {
        const pedido = await this.pedidoRepository.buscarPorIdPedido(idPedido);

        if(!pedido) {
            throw new HttpException('Pedido não encontrado, verifique o pedido que foi passado.', HttpStatus.NOT_FOUND);
        }
        return pedido;
    }
}