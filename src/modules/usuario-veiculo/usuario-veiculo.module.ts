import { Module } from '@nestjs/common';
import { UsuarioVeiculoService } from './usuario-veiculo.service';
import { UsuarioVeiculoController } from './usuario-veiculo.controller';
import { DatabaseModule } from 'src/infraestrutura/typeorm/database.module';
import { usuarioVeiculoProviders } from './providers/usuario-veiculo.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuarioVeiculoController],
  providers: [
    UsuarioVeiculoService,
    ...usuarioVeiculoProviders
  ],
})
export class UsuarioVeiculoModule {}
