import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'frothub',
        entities: [
            Usuario,
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];