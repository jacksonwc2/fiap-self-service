import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { ProdutoModule } from './produto/produto.module';
import { PedidoModule } from './pedido/pedido.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ClienteModule, ProdutoModule, PedidoModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
