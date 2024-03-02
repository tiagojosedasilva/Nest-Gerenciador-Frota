import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import { DataSource } from 'typeorm';

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
            Usuario,
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];