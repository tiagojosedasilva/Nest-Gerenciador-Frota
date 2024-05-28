import { Module } from '@nestjs/common';
import { AvariasVeiculoService } from './avarias-veiculo.service';
import { AvariasVeiculoController } from './avarias-veiculo.controller';
import { avariasProviders } from './providers/avarias.provider';
import { DatabaseModule } from 'src/infraestrutura/typeorm/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AvariasVeiculoController],
  providers: [AvariasVeiculoService, ...avariasProviders],
})
export class AvariasVeiculoModule {}
