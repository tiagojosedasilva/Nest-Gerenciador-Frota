import { PartialType } from '@nestjs/swagger';
import { CreateAbastecimentoDto } from './create-abastecimento.dto';

export class UpdateAbastecimentoDto extends PartialType(CreateAbastecimentoDto) {}
