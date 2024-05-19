import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity()
export class Rota {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idCondutor: number

    @Column()
    destino: string

    @Column()
    numero: number

    @Column()
    placa: string

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

    @ManyToOne(() => Usuario, (usuario) => usuario.rota)
    @JoinColumn({ name: 'idCondutor', referencedColumnName: 'id' })
    idCondutor2: Usuario;

}
