import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { CreateAbastecimentoDto } from './dto/create-abastecimento.dto';
import { UpdateAbastecimentoDto } from './dto/update-abastecimento.dto';
import { Repository } from 'typeorm';
import { Abastecimento } from './entities/abastecimento.entity';

@Injectable()
export class AbastecimentoService {

  constructor(
    @Inject('ABASTECIMENTO_REPOSITORY')
    private readonly abastecimentosRepository: Repository<Abastecimento>
  ){}


  async create(createAbastecimentoDto: CreateAbastecimentoDto) {
    try {
      createAbastecimentoDto.totalGasto = (+createAbastecimentoDto.valorCombustivel * +createAbastecimentoDto.quantidadeLitros).toString()
      return await this.abastecimentosRepository.save(createAbastecimentoDto)
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }

  async findAll() {
    try {
      return await this.abastecimentosRepository.find()
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }

  async findOne(id: number) {
    try {
      return await this.abastecimentosRepository.findOne({where: {id: id}})
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }

  async findByIdUsuario(id: number){
    try {
      return await this.abastecimentosRepository.find({where: {idUsuario: id}})
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }

  async update(id: number, updateAbastecimentoDto: UpdateAbastecimentoDto) {
    try {
      updateAbastecimentoDto.totalGasto = (+updateAbastecimentoDto.valorCombustivel * +updateAbastecimentoDto.quantidadeLitros).toString()
      return await this.abastecimentosRepository.update(id, updateAbastecimentoDto)
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }

  remove(id: number) {
    return `Não é possivel excluir o abastecimento #${id}!`;
  }
}
