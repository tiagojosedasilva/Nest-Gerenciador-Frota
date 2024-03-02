import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { VeiculosModule } from './modules/veiculos/veiculos.module';

@Module({
  imports: [UsuarioModule, VeiculosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
