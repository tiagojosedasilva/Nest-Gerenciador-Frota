import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Veiculo {

    @PrimaryGeneratedColumn()
    id: number

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
    dataCriacao: Date

    @Column()
    statusVeiculo: number

    @Column()
    volumeTanque: number

    @Column()
    consumoMedioLitro: number
}

