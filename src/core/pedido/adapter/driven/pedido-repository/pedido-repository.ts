import { Repository } from "typeorm";
import { Inject, Injectable } from "@nestjs/common";
import { Pedido } from "src/core/pedido/core/domain/pedido";
import { PedidoEntity } from "src/core/pedido/adapter/driven/entity/pedido.entity";
import { AtualizarPedidoDTO } from "src/core/pedido/core/domain/atualizarStatusPedidoDTO";
import { ItemPedidoEntity } from "src/core/pedido/adapter/driven/entity/itemPedido.entity";
import { IPedidoRepository } from "src/core/pedido/core/application/repository/pedido-repository.port";

@Injectable()
export class PedidoRepository implements IPedidoRepository {
  constructor(
    @Inject("PEDIDO_REPOSITORY")
    private readonly pedidoRepo: Repository<PedidoEntity>,
    @Inject("ITEM_PEDIDO_REPOSITORY")
    private readonly itemPedidoRepo: Repository<ItemPedidoEntity>
  ) {}

  async salvarPedido(cadastrarPedido: Pedido): Promise<Pedido> {
    const pedidoEntity: PedidoEntity = cadastrarPedido;
    await this.pedidoRepo.save(pedidoEntity);

    pedidoEntity.combo.forEach((element) => {
      element.idPedido = pedidoEntity.id;
      const itemPedido: ItemPedidoEntity = element;
      this.itemPedidoRepo.save(itemPedido);
    });

    return pedidoEntity;
  }

  async listarPorIdCliente(idCliente: string): Promise<Pedido[]> {
    return await this.pedidoRepo.find({
      where: { idCliente },
      relations: ["combo"],
    });
  }

  async listarPedidos(): Promise<Pedido[]> {
    return await this.pedidoRepo.find({ relations: ["combo"] });
  }

  async buscarPorIdPedido(id: string): Promise<Pedido | null> {
    const pedidoEntity = await this.pedidoRepo.findOne({
      where: { id },
      relations: ["combo"],
    });
    if (!pedidoEntity) {
      return null;
    }
    return pedidoEntity;
  }

  async atualizarStatusPedido(
    id: string,
    atualizarStatusPedidoDTO: AtualizarPedidoDTO
  ): Promise<Pedido> {
    const pedidoEntity = await this.pedidoRepo.findOne({
      where: { id },
    });
    pedidoEntity.status = atualizarStatusPedidoDTO.status;
    await this.pedidoRepo.update({ id }, pedidoEntity);
    return pedidoEntity;
  }
}
