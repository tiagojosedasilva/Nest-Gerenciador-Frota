import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { UpdateChamadoDto } from './dto/update-chamado.dto';
import { Repository } from 'typeorm';
import { Chamado } from './entities/chamado.entity';

@Injectable()
export class ChamadosService {

  constructor(
    @Inject('CHAMADOS_REPOSITORY')
    private readonly chamadosRepository: Repository<Chamado>
  ){}

  async create(createChamadoDto: CreateChamadoDto) {
    try {
      return await  this.chamadosRepository.save(createChamadoDto)
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }

  async findAll() {
    try {
      return await  this.chamadosRepository.find()
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }

  async findAllChamadosAbertos() {
    try {
      return await  this.chamadosRepository.find(
        {
          where: {
            statusChamado: false
          }
        }
      )
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }

  async findOne(id: number) {
    try {
      return await  this.chamadosRepository.findOne({where: {id}})
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }

  async update(id: number, updateChamadoDto: UpdateChamadoDto) {
    try {
      return await  this.chamadosRepository.update(id, updateChamadoDto)
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }

  async remove(id: number) {
    try {
      return await  this.chamadosRepository.delete(id)
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }
}
