import { Module } from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { VeiculosController } from './veiculos.controller';
import { veiculosProviders } from './provider/veiculos.provider';
import { DatabaseModule } from 'src/infraestrutura/typeorm/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [VeiculosController],
  providers: [
    VeiculosService,
    ...veiculosProviders
  ],
})
export class VeiculosModule {}
