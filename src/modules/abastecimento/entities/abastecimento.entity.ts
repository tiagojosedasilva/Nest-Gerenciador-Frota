import { Usuario } from "src/modules/usuario/entities/usuario.entity";
import { Veiculo } from "src/modules/veiculos/entities/veiculo.entity";
import { Column, CreateDateColumn, Entity, Generated, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Abastecimento {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idVeiculo: number;

    @Column()
    idUsuario: number;

    @Column()
    kmAtual: string;

    
    @Column()
    valorCombustivel: string;
    
    @Column()
    quantidadeLitros: string;
    
    @Column()
    totalGasto: string;
    
    @ManyToOne(() => Veiculo, (veiculo) => veiculo.abastecimentos, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "id_veiculo", referencedColumnName: "id" }])
    idVeiculo2: Veiculo
    
    @ManyToOne(() => Usuario, (usuario) => usuario.abastecimentos, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "id_usuario", referencedColumnName: "id" }])
    idUsuario2: Usuario
    
    @CreateDateColumn()
    dataHora: Date;
}
