//auth.service.ts
import {
    Injectable,
    NotAcceptableException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import { UsuarioService } from 'src/modules/usuario/usuario.service';
import { Secret } from './contants/auth.constants';

  @Injectable()
  export class AuthService {
    constructor(
      private readonly usersService: UsuarioService,
      private jwtService: JwtService,
    ) {}
    async validarUsuario(username: string, password: string): Promise<any> {
      const user = await this.usersService.findOneForEmail(username);
      if (!user) {
        throw new UnauthorizedException('Usuário ou Senha Inválidos');
      }
      if (user.senha === password) {
        return await this.gerarToken(user);
      }
      throw new UnauthorizedException('Usuário ou Senha Inválidos');
    }
  
    async gerarToken(payload: Usuario) {
      return {
        access_token: this.jwtService.sign(
          { email: payload.email },
          {
            secret: Secret.secretKey,
            expiresIn: '7days',
          },
        ),
      };
    }
  }
  