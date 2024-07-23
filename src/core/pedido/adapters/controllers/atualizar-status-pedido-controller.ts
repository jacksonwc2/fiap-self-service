import { Injectable } from "@nestjs/common";
import { AtualizarStatusPedidoUseCase } from "../../use-cases/atualizar-status-pedido-use-case";
import { PedidoGateway } from "../gateways/pedido-gateway";
import { AtualizarPedidoDTO } from "../../dto/atualizarStatusPedidoDTO";
import { PedidoDTO } from "../../dto/pedidoDTO";

@Injectable()
export class AtualizarStatusPedidoController {

  constructor(
    private readonly pedidoGateway: PedidoGateway,
    private readonly atualizarStatusPedidoUseCase: AtualizarStatusPedidoUseCase
  ) {}

  async execute(
    id: string,
    atualizarStatusPedidoDTO: AtualizarPedidoDTO
  ): Promise<PedidoDTO> {
    const pedido = await this.atualizarStatusPedidoUseCase.execute(this.pedidoGateway, id, atualizarStatusPedidoDTO);
    const adapterPresenter: PedidoDTO = {...pedido};
        
    return adapterPresenter;
  }
}
