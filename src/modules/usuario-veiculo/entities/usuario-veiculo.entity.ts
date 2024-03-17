import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UsuarioVeiculo {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idCliente: number

    @Column()
    idUsuario: number

    @Column()
    idVeiculo: number

    @Column()
    @CreateDateColumn()
    dataVinculacao: Date

    @Column()
    @UpdateDateColumn()
    dataDesvinculacao: Date | null

    @Column()
    quilometragemFinal: number | null

    @Column()
    quilometragemInicial: number

    
    // fotoQuilometrageInicial

    // fotoQuilometrageFinal
}
