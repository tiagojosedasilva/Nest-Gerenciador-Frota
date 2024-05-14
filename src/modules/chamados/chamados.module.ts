import { Module } from '@nestjs/common';
import { ChamadosService } from './chamados.service';
import { ChamadosController } from './chamados.controller';
import { DatabaseModule } from '../../infraestrutura/typeorm/database.module';
import { chamadosProviders } from './providers/chamado.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ChamadosController],
  providers: [
    ChamadosService,
    ...chamadosProviders
  ],
})
export class ChamadosModule {}
