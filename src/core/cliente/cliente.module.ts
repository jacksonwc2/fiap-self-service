import { Module } from '@nestjs/common';
import { ConsultarClientePorCPFUseCase } from './use-cases/consultar-cliente-cpf-use-case';
import { ClienteRepository } from './external/repository/cliente-repository';
import { DataSource } from 'typeorm';
import { IClienteRepository } from './external/repository/cliente-repository.interface';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { ClienteAPIController } from './external/api/cliente-api.controller';
import { ClienteEntity } from './external/repository/cliente.entity';
import { ClienteGateway } from './adapters/gateways/cliente-gateway';
import { ConsultarClientePorCPFController } from './adapters/controllers/consultar-cliente-controller';
import { CadastrarClienteUseCase } from './use-cases/cadastrar-cliente-use-case';
import { CadastrarClienteController } from './adapters/controllers/cadastrar-cliente-controller';

@Module({
  providers: [

    // gateways
    ClienteGateway,

    // controllers
    ConsultarClientePorCPFController,
    CadastrarClienteController,
    
    // use cases
    CadastrarClienteUseCase,
    ConsultarClientePorCPFUseCase,
    
    // external repository
    {
      provide: IClienteRepository,
      useClass: ClienteRepository,
    },
    {
      provide: 'CLIENTE_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(ClienteEntity),
      inject: ['DATA_SOURCE'],
    }
  ],
  controllers: [ClienteAPIController],
  imports: [DatabaseModule],
  exports: [ClienteGateway,]
})
export class ClienteModule {}
