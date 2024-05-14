import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rota {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idCondutor: number

    @Column()
    destino: string

    @Column()
    bairro: string

    @Column()
    cidade: string

    @Column()
    complemento: string

    @Column()
    referencia: string

    @Column()
    consumo: string

    @Column()
    distancia: string

    @Column()
    condutor: string
}
