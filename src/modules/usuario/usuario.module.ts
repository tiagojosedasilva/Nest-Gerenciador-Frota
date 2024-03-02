import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { DatabaseModule } from 'src/infraestrutura/typeorm/database.module';
import { usuarioProviders } from './providers/usuario.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuarioController],
  providers: [
    UsuarioService,
    ...usuarioProviders
  ],
})
export class UsuarioModule {}
