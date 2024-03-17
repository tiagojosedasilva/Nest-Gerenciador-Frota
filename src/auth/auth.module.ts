//auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { databaseProviders } from 'src/infraestrutura/typeorm/database.provider';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UsuarioService } from 'src/modules/usuario/usuario.service';
import { UsuarioModule } from 'src/modules/usuario/usuario.module';

@Module({
  imports: [ UsuarioModule, JwtModule.register({}) ],
  controllers: [AuthController],
  providers: [AuthService, UsuarioService, JwtStrategy, ...databaseProviders],
})
export class AuthModule {}