import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioVeiculoService } from './usuario-veiculo.service';
import { CreateUsuarioVeiculoDto } from './dto/create-usuario-veiculo.dto';
import { UpdateUsuarioVeiculoDto } from './dto/update-usuario-veiculo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Usuario-Veiculo")
@Controller('usuario-veiculo')
export class UsuarioVeiculoController {
  constructor(private readonly usuarioVeiculoService: UsuarioVeiculoService) {}

  @Post()
  create(@Body() createUsuarioVeiculoDto: CreateUsuarioVeiculoDto) {
    return this.usuarioVeiculoService.create(createUsuarioVeiculoDto);
  }

  @Get()
  findAll() {
    return this.usuarioVeiculoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioVeiculoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioVeiculoDto: UpdateUsuarioVeiculoDto) {
    return this.usuarioVeiculoService.update(+id, updateUsuarioVeiculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioVeiculoService.remove(+id);
  }
}
