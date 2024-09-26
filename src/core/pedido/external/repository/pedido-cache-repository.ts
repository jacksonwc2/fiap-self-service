import {Inject, Injectable} from "@nestjs/common";
import {IPedidoCacheRepository} from "./pedido-cache-repository.interface";
import {DynamoDB} from "aws-sdk";
import {PedidoEntity} from "./pedido.entity";

@Injectable()
export class PedidoCacheRepository implements IPedidoCacheRepository {
    constructor(
        @Inject("PEDIDO_CACHE_REPOSITORY")
        private readonly pedidoCacheRepo: DynamoDB.DocumentClient
    ) {
    }

    async listarPedidosAtivos(): Promise<any> {
        const params = {
            TableName: 'Pedidos',
        }

        try {
            const result = await this.pedidoCacheRepo.scan(params).promise();
            return result.Items;
        } catch (error) {
            throw new Error(`Não foi possível listar os pedidos ativos: ${error.message}`);
        }
    }

    async adicionarPedidoCache(pedido: PedidoEntity) {
        const params = {
            TableName: 'Pedidos',
            Item: pedido,
        };

        try {
            await this.pedidoCacheRepo.put(params).promise();
        } catch (error) {
            throw new Error(`Não foi possível adicionar o pedido ao cache: ${error.message}`);
        }

    }

    async removerPedidoCache(id: string) {
        const params = {
            TableName: 'Pedidos',
            Key: {
                id: id
            }
        }

        try {
            await this.pedidoCacheRepo.delete(params).promise()

        } catch (error) {
            throw new Error(`Não foi possível remover o pedido do cache: ${error.message}`)
        }
    }

    async atualizarStatusPedidoCache(id: string, novoStatus: string) {
        const params = {
            TableName: 'Pedidos',
            Key: { pedidoId: id },
            UpdateExpression: `set #field = :value`,
            ExpressionAttributeNames: {
                '#field': 'status',
            },
            ExpressionAttributeValues: {
                ':value': novoStatus,
            },
        };

        try {
            await this.pedidoCacheRepo.update(params).promise();
        } catch (error) {
            throw new Error(`Could not update pedido: ${error.message}`);
        }
    }
}