import { Pedido } from "src/pedido/adapter/driven/entity/pedido";
import { IPedidoRepository } from "../../repository/pedido-repository.port";
import { ICadastrarPedidoUseCase } from "./cadastrar-pedido.use-case";
import { Injectable } from "@nestjs/common";
import { CadastrarPedidoDTO } from "src/pedido/core/domain/cadastrarPedidoDTO";

@Injectable()
export class CadastrarPedidoUseCase implements ICadastrarPedidoUseCase {
    constructor(private readonly pedidoRepository: IPedidoRepository) {}

    async cadastrarPedido(pedidoDTO: CadastrarPedidoDTO): Promise<Pedido> {
        return await this.pedidoRepository.salvarPedido(pedidoDTO);
    }
}