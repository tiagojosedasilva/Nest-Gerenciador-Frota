import { DataSource } from 'typeorm';
import { Chamado } from '../entities/chamado.entity';

export const chamadosProviders = [
  {
    provide: 'CHAMADOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Chamado),
    inject: ['DATA_SOURCE'],
  },
];