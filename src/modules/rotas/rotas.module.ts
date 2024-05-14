import { Module } from '@nestjs/common';
import { RotasService } from './rotas.service';
import { RotasController } from './rotas.controller';
import { rotasProviders } from './providers/rotas.provider';
import { DatabaseModule } from '../../infraestrutura/typeorm/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RotasController],
  providers: [
    RotasService,
    ...rotasProviders
  ],
})
export class RotasModule {}
