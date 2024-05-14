import { PartialType } from '@nestjs/swagger';
import { CreateRotaDto } from './create-rota.dto';

export class UpdateRotaDto extends PartialType(CreateRotaDto) {}
