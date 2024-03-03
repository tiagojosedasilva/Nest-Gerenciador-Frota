import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { VeiculosModule } from './modules/veiculos/veiculos.module';
import { UsuarioVeiculoModule } from './modules/usuario-veiculo/usuario-veiculo.module';

@Module({
  imports: [UsuarioModule, VeiculosModule, UsuarioVeiculoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
