import { Injectable } from "@nestjs/common";
import { ConsultarPedidoPorIdUseCase } from "../../use-cases/consultar-pedido-use-case";
import { PedidoDTO } from "../../dto/pedidoDTO";
import { PedidoGateway } from "../gateways/pedido-gateway";

@Injectable()
export class ConsultarPedidoPorIdController {
  constructor(
    private readonly pedidoGateway: PedidoGateway,
    private readonly consultarPedidoPorIdUseCase: ConsultarPedidoPorIdUseCase
  ) {}

  async execute(idPedido: string): Promise<PedidoDTO> {
    const pedido = await this.consultarPedidoPorIdUseCase.execute(
      this.pedidoGateway,
      idPedido
    );
    const adapterPresenter: PedidoDTO = { ...pedido };

    return adapterPresenter;
  }
}
