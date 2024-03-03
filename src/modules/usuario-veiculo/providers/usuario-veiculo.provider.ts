import { DataSource } from 'typeorm';
import { UsuarioVeiculo } from '../entities/usuario-veiculo.entity';

export const usuarioVeiculoProviders = [
  {
    provide: 'USUARIO_VEICULO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UsuarioVeiculo),
    inject: ['DATA_SOURCE'],
  },
];