import { Injectable, Inject, ForbiddenException, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateUsuarioDto } from "./dto/create-usuario.dto";
import { UpdateUsuarioDto } from "./dto/update-usuario.dto";
import { Usuario } from "./entities/usuario.entity";
import { NotFoundError } from "rxjs";

@Injectable()
export class UsuarioService {

  constructor(
    @Inject('USUARIO_REPOSITORY')
    private readonly usuarioRepository: Repository<Usuario>
  ){}

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      return await this.usuarioRepository.save(createUsuarioDto)
    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }
  }

  async findAll() {
    try {
      return await this.usuarioRepository.find({
        select: ['idVeiculo2'],
        relations: ['idVeiculo2', 'rota']
      })
    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }
  }

  async findOne(id: number) {
    try {
      return await this.usuarioRepository.findOne({where: {id}, relations: ['idVeiculo2']});
    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }
  }

  async findOneForEmail(email: string){
    try {
      return await this.usuarioRepository.findOne({where: {email: email}})
    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    try {
      return await this.usuarioRepository.update(id, updateUsuarioDto)
    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }
  }

  async remove(id: number) {
    try {
      return await this.usuarioRepository.delete(id)
    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }
  }

  async findByVeiculo(id: number){
    try {
      const usuario = this.usuarioRepository.findOne({
        where: {
          idVeiculo: id
        }
      })
      return usuario
    } catch (error) {
      console.error(error)
      throw new NotFoundException(error)
    }
  }

}
