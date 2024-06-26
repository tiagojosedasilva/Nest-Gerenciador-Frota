import { UsuarioVeiculo } from 'src/modules/usuario-veiculo/entities/usuario-veiculo.entity';
import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import { Veiculo } from 'src/modules/veiculos/entities/veiculo.entity';
import { DataSource } from 'typeorm';
import { Rota } from '../../modules/rotas/entities/rota.entity';
import { Chamado } from '../../modules/chamados/entities/chamado.entity';
import { AvariasVeiculo } from 'src/modules/avarias-veiculo/entities/avarias-veiculo.entity';
import { Abastecimento } from 'src/modules/abastecimento/entities/abastecimento.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'roundhouse.proxy.rlwy.net',
        port: 36699,
        username: 'root',
        password: '-cCbeED1ac64f2gGg53Gbda-CEHh5CDa',
        database: 'railway',
        entities: [
          Abastecimento,
          AvariasVeiculo,
          Chamado,  
          Rota,
          Usuario,
          UsuarioVeiculo,
          Veiculo,
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];