import { DataSource } from 'typeorm';
import { AvariasVeiculo } from '../entities/avarias-veiculo.entity';

export const avariasProviders = [
  {
    provide: 'AVARIAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AvariasVeiculo),
    inject: ['DATA_SOURCE'],
  },
];