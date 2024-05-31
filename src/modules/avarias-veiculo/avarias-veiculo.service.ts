import { ForbiddenException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAvariasVeiculoDto } from './dto/create-avarias-veiculo.dto';
import { UpdateAvariasVeiculoDto } from './dto/update-avarias-veiculo.dto';
import { Repository } from 'typeorm';
import { AvariasVeiculo } from './entities/avarias-veiculo.entity';

@Injectable()
export class AvariasVeiculoService {
  constructor(
    @Inject('AVARIAS_REPOSITORY')
    private readonly avariasRepository: Repository<AvariasVeiculo>
  ){}
  
  async create(createVeiculoDto: CreateAvariasVeiculoDto) {
    try {
      return await this.avariasRepository.save(createVeiculoDto)
    } catch (error) {
      console.error(error)
      throw new NotFoundException(error)
    }
  }

 async findAll(idUsuariop: number) {
    try {
      return await this.avariasRepository.find({ 
        relations: ["veiculo"],
        where: {
          idUsuario: idUsuariop,
        }
      })

    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }
  }
  
 async buscarAvariasPorVeiculo(idUsuariop: number) {
  try {
    return await this.avariasRepository.query('SELECT * FROM avarias_veiculo WHERE idUsuario = ?', [idUsuariop]);
  } catch (error) {
    console.error(error)
    throw new ForbiddenException(error)
  }
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
