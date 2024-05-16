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

    @ManyToOne(() => Usuario, (usuario) => usuario.rota, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    })
    @JoinColumn([{name: "idCondutor", referencedColumnName: "id"}])
    idCondutor2: Usuario
}
