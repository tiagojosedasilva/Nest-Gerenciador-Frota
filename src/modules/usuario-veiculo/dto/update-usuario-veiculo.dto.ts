import { PartialType } from '@nestjs/swagger';
import { CreateUsuarioVeiculoDto } from './create-usuario-veiculo.dto';

export class UpdateUsuarioVeiculoDto extends PartialType(CreateUsuarioVeiculoDto) {}
