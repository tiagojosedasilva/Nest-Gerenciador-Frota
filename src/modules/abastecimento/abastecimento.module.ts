import { Module } from '@nestjs/common';
import { AbastecimentoService } from './abastecimento.service';
import { AbastecimentoController } from './abastecimento.controller';
import { DatabaseModule } from 'src/infraestrutura/typeorm/database.module';
import { abastecimentosProviders } from './providers/abastecimento.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [AbastecimentoController],
  providers: [
    AbastecimentoService,
    ...abastecimentosProviders
  ],
})
export class AbastecimentoModule {}
