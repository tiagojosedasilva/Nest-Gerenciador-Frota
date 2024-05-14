import { ForbiddenException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { Repository } from 'typeorm';
import { Veiculo } from './entities/veiculo.entity';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class VeiculosService {

  constructor(
    @Inject('VEICULOS_REPOSITORY')
    private readonly veiculosRepository: Repository<Veiculo>,
    private readonly usuariosService: UsuarioService
  ){}

  async create(createVeiculoDto: CreateVeiculoDto) {
    try {
      return await this.veiculosRepository.save(createVeiculoDto)
    } catch (error) {
      console.error(error)
      throw new NotFoundException(error)
    }
  }

  async findAll() {
    try {
      return await this.veiculosRepository.find()
    } catch (error) {
      console.error(error);
      throw new NotFoundException(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.veiculosRepository.findOneBy({id})
    } catch (error) {
      console.error(error)
      throw new NotFoundException(error)
    }
  }

  async update(id: number, updateVeiculoDto: UpdateVeiculoDto) {
    try {
      return await this.veiculosRepository.update(id, updateVeiculoDto)
    } catch (error) {
      console.error(error)
      throw new NotFoundException(error)
    }
  }

  async remove(id: number) {
    try {
      return await this.veiculosRepository.delete(id)
    } catch (error) {
      console.log(error)
      throw new NotFoundException(error)
    }
  }

  async findUsuarioByIdVeiculo(id: number){
    try {
      const usuario = await this.usuariosService.findByVeiculo(id)
      return usuario
    } catch (error) {
      console.error(error)
      throw new NotFoundException(error)
    }
  }

  async listVeiculoByConsumo(){
    try {
      return this.veiculosRepository.find({order: {consumoMedioLitro: 'DESC'}})
    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }
  }
  
}
