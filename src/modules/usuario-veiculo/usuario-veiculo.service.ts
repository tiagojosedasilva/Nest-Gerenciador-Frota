import { Inject, Injectable } from '@nestjs/common';
import { CreateUsuarioVeiculoDto } from './dto/create-usuario-veiculo.dto';
import { UpdateUsuarioVeiculoDto } from './dto/update-usuario-veiculo.dto';
import { Repository } from 'typeorm';
import { UsuarioVeiculo } from './entities/usuario-veiculo.entity';

@Injectable()
export class UsuarioVeiculoService {

  constructor(
    @Inject("USUARIO_VEICULO_REPOSITORY")
    private readonly usuarioVeiculoRepository: Repository<UsuarioVeiculo>
  ){}

  async create(createUsuarioVeiculoDto: CreateUsuarioVeiculoDto) {
    return await this.usuarioVeiculoRepository.save(createUsuarioVeiculoDto)
  }

  async findAll() {
    return await this.usuarioVeiculoRepository.find()
  }

  async findOne(id: number) {
    return await this.usuarioVeiculoRepository.findOneBy({id})
  }

  async update(id: number, updateUsuarioVeiculoDto: UpdateUsuarioVeiculoDto) {
    return await this.usuarioVeiculoRepository.update(id, updateUsuarioVeiculoDto)
  }

  async remove(id: number) {
    return await this.usuarioVeiculoRepository.delete(id)
  }
}
