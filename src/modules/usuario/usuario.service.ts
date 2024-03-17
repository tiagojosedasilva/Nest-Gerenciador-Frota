import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateUsuarioDto } from "./dto/create-usuario.dto";
import { UpdateUsuarioDto } from "./dto/update-usuario.dto";
import { Usuario } from "./entities/usuario.entity";

@Injectable()
export class UsuarioService {

  constructor(
    @Inject('USUARIO_REPOSITORY')
    private readonly usuarioRepository: Repository<Usuario>
  ){}

  async create(createUsuarioDto: CreateUsuarioDto) {
    return await this.usuarioRepository.save(createUsuarioDto)
  }

  async findAll() {
    return await this.usuarioRepository.find()
  }

  async findOne(id: number) {
    return await this.usuarioRepository.findOneBy({id});
  }

  async findOneForEmail(email: string){
    return await this.usuarioRepository.findOne({where: {email: email}})
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return await this.usuarioRepository.update(id, updateUsuarioDto)
  }

  async remove(id: number) {
    return await this.usuarioRepository.delete(id)
  }

}
