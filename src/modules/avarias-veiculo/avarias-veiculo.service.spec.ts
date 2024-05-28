import { Test, TestingModule } from '@nestjs/testing';
import { AvariasVeiculoService } from './avarias-veiculo.service';

describe('AvariasVeiculoService', () => {
  let service: AvariasVeiculoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvariasVeiculoService],
    }).compile();

    service = module.get<AvariasVeiculoService>(AvariasVeiculoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
