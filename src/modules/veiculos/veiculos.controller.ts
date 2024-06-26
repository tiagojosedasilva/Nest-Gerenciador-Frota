import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

// @UseGuards(AuthGuard('jwt'))
@ApiTags('Veiculos')
@Controller('veiculos')
export class VeiculosController {
  constructor(private readonly veiculosService: VeiculosService) {}

  @Post()
  create(@Body() createVeiculoDto: CreateVeiculoDto) {
    return this.veiculosService.create(createVeiculoDto);
  }

  @Get()
  findAll() {
    return this.veiculosService.findAll();
  }

  @Get('veiculos-por-consumo')
  listVeiculoByConsumo(){
    return this.veiculosService.listVeiculoByConsumo()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.veiculosService.findOne(+id);
  }

  @Get('buscar-usuario-idveiculo/:id')
  findOneByIdVeiculo(@Param('id') id: string){
    return this.veiculosService.findUsuarioByIdVeiculo(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVeiculoDto: UpdateVeiculoDto) {
    return this.veiculosService.update(+id, updateVeiculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.veiculosService.remove(+id);
  }
}
