import { PartialType } from '@nestjs/swagger';
import { CreateChamadoDto } from './create-chamado.dto';

export class UpdateChamadoDto extends PartialType(CreateChamadoDto) {}
