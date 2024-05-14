import { Test, TestingModule } from '@nestjs/testing';
import { RotasService } from './rotas.service';

describe('RotasService', () => {
  let service: RotasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RotasService],
    }).compile();

    service = module.get<RotasService>(RotasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
