import { Inject, Injectable } from '@nestjs/common';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { Repository } from 'typeorm';
import { Veiculo } from './entities/veiculo.entity';

@Injectable()
export class VeiculosService {

  constructor(
    @Inject('VEICULOS_REPOSITORY')
    private readonly veiculosRepository: Repository<Veiculo>
  ){}

  async create(createVeiculoDto: CreateVeiculoDto) {
    return await this.veiculosRepository.save(createVeiculoDto)
  }

  async findAll() {
    return await this.veiculosRepository.find()
  }

  async findOne(id: number) {
    return await this.veiculosRepository.findOneBy({id})
  }

  async update(id: number, updateVeiculoDto: UpdateVeiculoDto) {
     return await this.veiculosRepository.update(id, updateVeiculoDto)
  }

  async remove(id: number) {
    return await this.veiculosRepository.delete(id)
  }
}
