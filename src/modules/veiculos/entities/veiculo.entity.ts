import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { AvariasVeiculo } from "src/modules/avarias-veiculo/entities/avarias-veiculo.entity";
import { Abastecimento } from "src/modules/abastecimento/entities/abastecimento.entity";

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

    @OneToMany(() => AvariasVeiculo, avaria => avaria.veiculo)
    avarias: AvariasVeiculo[];

    @OneToMany(() => Abastecimento, (abastecimentos) => abastecimentos.idVeiculo2)
    abastecimentos: Abastecimento[];

}

