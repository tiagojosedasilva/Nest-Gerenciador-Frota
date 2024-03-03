import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioVeiculoController } from './usuario-veiculo.controller';
import { UsuarioVeiculoService } from './usuario-veiculo.service';

describe('UsuarioVeiculoController', () => {
  let controller: UsuarioVeiculoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioVeiculoController],
      providers: [UsuarioVeiculoService],
    }).compile();

    controller = module.get<UsuarioVeiculoController>(UsuarioVeiculoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
