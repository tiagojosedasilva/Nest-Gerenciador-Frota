import { DataSource } from 'typeorm';
import { Veiculo } from '../entities/veiculo.entity';


export const veiculosProviders = [
  {
    provide: 'VEICULOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Veiculo),
    inject: ['DATA_SOURCE'],
  },
];