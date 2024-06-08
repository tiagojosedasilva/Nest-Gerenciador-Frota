import { Test, TestingModule } from '@nestjs/testing';
import { AbastecimentoService } from './abastecimento.service';

describe('AbastecimentoService', () => {
  let service: AbastecimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbastecimentoService],
    }).compile();

    service = module.get<AbastecimentoService>(AbastecimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
