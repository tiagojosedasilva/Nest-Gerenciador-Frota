import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioVeiculoService } from './usuario-veiculo.service';

describe('UsuarioVeiculoService', () => {
  let service: UsuarioVeiculoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioVeiculoService],
    }).compile();

    service = module.get<UsuarioVeiculoService>(UsuarioVeiculoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
