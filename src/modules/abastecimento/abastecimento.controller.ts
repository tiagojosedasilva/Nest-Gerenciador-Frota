import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbastecimentoService } from './abastecimento.service';
import { CreateAbastecimentoDto } from './dto/create-abastecimento.dto';
import { UpdateAbastecimentoDto } from './dto/update-abastecimento.dto';

@Controller('abastecimento')
export class AbastecimentoController {
  constructor(private readonly abastecimentoService: AbastecimentoService) {}

  @Post()
  create(@Body() createAbastecimentoDto: CreateAbastecimentoDto) {
    return this.abastecimentoService.create(createAbastecimentoDto);
  }

  @Get()
  findAll() {
    return this.abastecimentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abastecimentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAbastecimentoDto: UpdateAbastecimentoDto) {
    return this.abastecimentoService.update(+id, updateAbastecimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.abastecimentoService.remove(+id);
  }
}
