import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';
import { Repository } from 'typeorm';
import { Rota } from './entities/rota.entity';

@Injectable()
export class RotasService {

  constructor(
    @Inject('ROTAS_REPOSITORY')
    private readonly rotaRepository: Repository<Rota>
  ){}

  async create(createRotaDto: CreateRotaDto) {
    try {
      return await this.rotaRepository.save(createRotaDto)
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }

  async findAll() {
    try {
      return await this.rotaRepository.find({relations: ['idCondutor2']})
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }

  async findOne(id: number) {
    try {
      return await this.rotaRepository.findOne({where: {id: id}, relations: ['idCondutor2']})
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }

  async findRotaDoUsuario(idCondutor: number) {
    try {
      return await this.rotaRepository.findOne({where: {idCondutor: idCondutor,}, relations: ['idCondutor2']})
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }

  async update(id: number, updateRotaDto: UpdateRotaDto) {
    try {
      return await this.rotaRepository.update(id, updateRotaDto)
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }

  async remove(id: number) {
    try {
      return await this.rotaRepository.delete(id)
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }
}
