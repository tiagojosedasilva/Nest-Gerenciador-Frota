export class CreateUsuarioVeiculoDto {

    idUsuario: number

    idVeiculo: number

    idCliente: number

    dataVinculacao: Date

    dataDesvinculacao: Date | null

    quilometragemFinal: number | null

    quilometragemInicial: number

    // fotoQuilometrageInicial

    // fotoQuilometrageFinal
}
