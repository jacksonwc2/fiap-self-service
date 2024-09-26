import { Injectable } from "@nestjs/common";
import { PedidoGateway } from "../gateways/pedido-gateway";
import { PedidoDTO } from "../../dto/pedidoDTO";
import {ListarPedidosAtivosUseCase} from "../../use-cases/listar-pedidos-ativos-use-case";

@Injectable()
export class ListarPedidosAtivosController {
  constructor(
    private readonly pedidoGateway: PedidoGateway,
    private readonly listarPedidosAtivosUseCase: ListarPedidosAtivosUseCase
  ) {}

  async execute(): Promise<PedidoDTO[]> {
    return await this.listarPedidosAtivosUseCase.execute(this.pedidoGateway);
  }
}
