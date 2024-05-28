import { Test, TestingModule } from '@nestjs/testing';
import { AvariasVeiculoController } from './avarias-veiculo.controller';
import { AvariasVeiculoService } from './avarias-veiculo.service';

describe('AvariasVeiculoController', () => {
  let controller: AvariasVeiculoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvariasVeiculoController],
      providers: [AvariasVeiculoService],
    }).compile();

    controller = module.get<AvariasVeiculoController>(AvariasVeiculoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
