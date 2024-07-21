import { Module } from '@nestjs/common';
import { ClienteModule } from './core/cliente/cliente.module';
import { ProdutoModule } from './core/produto/produto.module';
import { PedidoModule } from './core/pedido/pedido.module';
import { DatabaseModule } from './infrastructure/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './infrastructure/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClienteModule,
    ProdutoModule,
    PedidoModule,
    DatabaseModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
