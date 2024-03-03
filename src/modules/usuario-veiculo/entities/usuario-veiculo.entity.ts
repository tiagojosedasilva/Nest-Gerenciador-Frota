import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsuarioVeiculo {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idUsuario: number

    @Column()
    idVeiculo: number

    @Column()
    dataVinculacao: Date

    @Column()
    dataDesvinculacao: Date

    @Column()
    quilometragemFinal: number

    @Column()
    quilometragemInicial: number

    // fotoQuilometrageInicial

    // fotoQuilometrageFinal
}
