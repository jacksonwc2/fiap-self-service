import { Test, TestingModule } from '@nestjs/testing';
import { ConsultarClienteService } from './consultar-cliente.service';

describe('ConsultarClienteService', () => {
  let service: ConsultarClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultarClienteService],
    }).compile();

    service = module.get<ConsultarClienteService>(ConsultarClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
