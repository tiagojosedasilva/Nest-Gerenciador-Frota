import { ApiProperty } from "@nestjs/swagger";

export class CreateAvariasVeiculoDto {
    @ApiProperty({ example: 0, description: 'idVeiculo' })
    idVeiculo: number;

    @ApiProperty({ example: 0, description: 'idUsuario' })
    idUsuario: number;

    @ApiProperty({ example: 'teste', description: 'tituloAvaria' })
    tituloAvaria: string;

    @ApiProperty({ example: 'teste', description: 'mensagemAvaria' })
    mensagemAvaria: string;
}
