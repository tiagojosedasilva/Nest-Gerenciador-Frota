//jwt-strategy.ts
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsuarioService } from 'src/modules/usuario/usuario.service';
import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import { JwtPayload } from '../interfaces/jwt-payload';
import { Secret } from '../contants/auth.constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private usersService: UsuarioService) {
    super({
      secretOrKey: Secret.secretKey,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
    });
  }
  async validate(payload: JwtPayload): Promise<Usuario> {
    const { email } = payload;
    const user = await this.usersService.findOneForEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
