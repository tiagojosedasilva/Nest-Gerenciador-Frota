import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Chamado {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    titulo: string
    
    @Column()
    descricao: string

    @Column()
    idRota: number

    @Column()
    idCondutor: number

    @Column()
    statusChamado: boolean // 1 atendido 0 em aberto

    @Column()
    dataHoraCriacao: string

    @Column()
    dataHoraAtualzacao: string

    @Column()
    dataHoraEncerramento: string
}
