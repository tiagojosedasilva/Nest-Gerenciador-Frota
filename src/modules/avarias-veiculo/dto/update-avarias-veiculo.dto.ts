import { PartialType } from '@nestjs/swagger';
import { CreateAvariasVeiculoDto } from './create-avarias-veiculo.dto';

export class UpdateAvariasVeiculoDto extends PartialType(CreateAvariasVeiculoDto) {}
