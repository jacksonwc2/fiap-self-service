import { Module } from '@nestjs/common';
import { ICadastrarProdutoUseCase } from './core/application/services/cadastras-produto/cadastrar-produto.use-case';
import { CadastrarProdutoService } from './core/application/services/cadastras-produto/cadastrar-produto.service';
import { IProdutoRepository } from './core/application/repository/produto-repository.port';
import { ProdutoRepositoryService } from './adapter/driven/produto-repository/produto-repository.service';
import { DataSource } from 'typeorm';
import { ProdutoController } from './adapter/driver/produto.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ProdutoEntity } from './adapter/driven/entity/produto.entity';

@Module({
    providers: [
        {
          provide: ICadastrarProdutoUseCase,
          useClass: CadastrarProdutoService,
        },
        {
          provide: IProdutoRepository,
          useClass: ProdutoRepositoryService,
        },
        {
          provide: 'PRODUTO_REPOSITORY',
          useFactory: (dataSource: DataSource) => dataSource.getRepository(ProdutoEntity),
          inject: ['DATA_SOURCE'],
        },
      ],
      controllers: [ProdutoController],
      imports: [DatabaseModule],
})
export class ProdutoModule {}
