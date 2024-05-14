import { DataSource } from 'typeorm';
import { Rota } from '../entities/rota.entity';

export const rotasProviders = [
  {
    provide: 'ROTAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Rota),
    inject: ['DATA_SOURCE'],
  },
];