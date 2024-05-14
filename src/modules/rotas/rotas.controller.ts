import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RotasService } from './rotas.service';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Rotas')
@Controller('rotas')
export class RotasController {
  constructor(private readonly rotasService: RotasService) {}

  @Post()
  create(@Body() createRotaDto: CreateRotaDto) {
    return this.rotasService.create(createRotaDto);
  }

  @Get()
  findAll() {
    return this.rotasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rotasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRotaDto: UpdateRotaDto) {
    return this.rotasService.update(+id, updateRotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rotasService.remove(+id);
  }
}
