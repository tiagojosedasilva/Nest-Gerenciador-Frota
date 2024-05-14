import { Test, TestingModule } from '@nestjs/testing';
import { ChamadosController } from './chamados.controller';
import { ChamadosService } from './chamados.service';

describe('ChamadosController', () => {
  let controller: ChamadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChamadosController],
      providers: [ChamadosService],
    }).compile();

    controller = module.get<ChamadosController>(ChamadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
