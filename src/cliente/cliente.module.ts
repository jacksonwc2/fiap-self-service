import { Module } from '@nestjs/common';
import { CadastrarClienteService } from './core/application/services/cadastrar-cliente/cadastrar-cliente.service';
import { ICadastrarClienteUseCase } from './core/application/services/cadastrar-cliente/cadastrar-cliente.use-case';
import { ConsultarClientePorCPFService } from './core/application/services/consultar-cliente/consultar-cliente-cpf.service';
import { ClienteRepositoryService } from './adapter/driven/cliente-repository/cliente-repository.service';
import { DataSource } from 'typeorm';
import { Cliente } from './adapter/driven/entity/cliente.entity';
import { IClienteRepository } from './core/application/repository/cliente-repository.port';
import { DatabaseModule } from 'src/database/database.module';
import { ClienteController } from './adapter/driver/cliente.controller';
import { IConsultarClientePorCPFUseCase } from './core/application/services/consultar-cliente/consultar-cliente-cpf.use-case';

@Module({
  providers: [
    {
      provide: ICadastrarClienteUseCase,
      useClass: CadastrarClienteService,
    },
    {
      provide: IConsultarClientePorCPFUseCase,
      useClass: ConsultarClientePorCPFService,
    },
    {
      provide: IClienteRepository,
      useClass: ClienteRepositoryService,
    },
    {
      provide: 'CLIENTE_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Cliente),
      inject: ['DATA_SOURCE'],
    },
  ],
  controllers: [ClienteController],
  imports: [DatabaseModule],
})
export class ClienteModule {}
