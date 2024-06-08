import { DataSource } from 'typeorm';
import { Abastecimento } from '../entities/abastecimento.entity';

export const abastecimentosProviders = [
  {
    provide: 'ABASTECIMENTO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Abastecimento),
    inject: ['DATA_SOURCE'],
  },
];