import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { CreateAvariasVeiculoDto } from './dto/create-avarias-veiculo.dto';
import { UpdateAvariasVeiculoDto } from './dto/update-avarias-veiculo.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AvariasVeiculoService {
  constructor(
    @Inject('AVARIAS_REPOSITORY')
    private readonly avariasRepository: Repository<AvariasVeiculoService>
  ){}

  async create(createAvariasDto: CreateAvariasVeiculoDto) {
    try {
      return await  this.avariasRepository.save(createAvariasDto)
    } catch (error) {
      console.log(error)
      throw new ForbiddenException(error)
    }
  }

  findAll() {
    return `This action returns all avariasVeiculo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avariasVeiculo`;
  }

  update(id: number, updateAvariasVeiculoDto: UpdateAvariasVeiculoDto) {
    return `This action updates a #${id} avariasVeiculo`;
  }

  remove(id: number) {
    return `This action removes a #${id} avariasVeiculo`;
  }
}
