import { Test, TestingModule } from '@nestjs/testing';
import { ChamadosService } from './chamados.service';

describe('ChamadosService', () => {
  let service: ChamadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChamadosService],
    }).compile();

    service = module.get<ChamadosService>(ChamadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
