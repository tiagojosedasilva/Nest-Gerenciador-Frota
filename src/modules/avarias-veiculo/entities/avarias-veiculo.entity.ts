import { Veiculo } from "src/modules/veiculos/entities/veiculo.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity() 
export class AvariasVeiculo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("int", { name: "id_veiculo",})
    idVeiculo: number | null;

    @Column()
    idUsuario: number | null;

    @Column()
    tituloAvaria: string;

    @Column()
    statusAvaria: string;

    @Column()
    mensagemAvaria: string;

    @CreateDateColumn()
    dataCriacao: Date;
    
    @UpdateDateColumn()
    dataAtualizacao: Date;

    @ManyToOne(() => Veiculo, veiculo => veiculo.avarias)
    @JoinColumn({ name: "id_veiculo" })
    veiculo: Veiculo;
}