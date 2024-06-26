import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { VeiculosModule } from './modules/veiculos/veiculos.module';
import { UsuarioVeiculoModule } from './modules/usuario-veiculo/usuario-veiculo.module';
import { AuthModule } from './auth/auth.module';
import { RotasModule } from './modules/rotas/rotas.module';
import { ChamadosModule } from './modules/chamados/chamados.module';
import { AvariasVeiculoModule } from './modules/avarias-veiculo/avarias-veiculo.module';
import { AbastecimentoModule } from './modules/abastecimento/abastecimento.module';

@Module({
  imports: [UsuarioModule, VeiculosModule, UsuarioVeiculoModule, AuthModule, RotasModule, ChamadosModule, AvariasVeiculoModule, AbastecimentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
