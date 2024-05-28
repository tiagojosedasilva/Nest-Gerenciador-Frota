import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvariasVeiculoService } from './avarias-veiculo.service';
import { CreateAvariasVeiculoDto } from './dto/create-avarias-veiculo.dto';
import { UpdateAvariasVeiculoDto } from './dto/update-avarias-veiculo.dto';

@Controller('avarias-veiculo')
export class AvariasVeiculoController {
  constructor(private readonly avariasVeiculoService: AvariasVeiculoService) {}

  @Post()
  create(@Body() createAvariasVeiculoDto: CreateAvariasVeiculoDto) {
    return this.avariasVeiculoService.create(createAvariasVeiculoDto);
  }

  @Get()
  findAll() {
    return this.avariasVeiculoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avariasVeiculoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvariasVeiculoDto: UpdateAvariasVeiculoDto) {
    return this.avariasVeiculoService.update(+id, updateAvariasVeiculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avariasVeiculoService.remove(+id);
  }
}
