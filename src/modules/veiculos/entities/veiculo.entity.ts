import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity()
export class Veiculo {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Usuario, (usuario) => usuario.idVeiculo2)
    usuario: Usuario;

    @Column()
    placa: string

    @Column()
    modelo: string

    @Column()
    marca: string

    @Column()
    anoFabricacao: string

    @Column()
    anoModelo: string

    @Column()
    quilometragem: string

    @Column()
    cor: string

    @Column()
    tipoCombustivel: string

    @Column()
    @CreateDateColumn()
    dataCriacao: Date

    @Column()
    statusVeiculo: number

    @Column()
    volumeTanque: number

    @Column()
    consumoMedioLitro: number
}

