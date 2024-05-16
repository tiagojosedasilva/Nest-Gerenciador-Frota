import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Veiculo } from "../../veiculos/entities/veiculo.entity";
import { Rota } from "../../rotas/entities/rota.entity";

@Entity("usuario")
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int", { name: "id_veiculo", nullable: true, unique: true })
    idVeiculo: number | null;

    @Column()
    idCliente: number

    @Column()
    nome: string;
    
    @Column()
    email: string;
    
    @Column()
    senha: string;
    
    @Column()
    tipoUsuario: number;
    
    @Column()
    cpf: string;
    
    @Column()
    rg: string;
    
    @Column()
    dataNascimento: string;
    
    @Column()
    celular: string;
    
    @Column()
    endereco: string;
    
    @Column()
    cep: string;
    
    @Column()
    cidade: string;
    
    @Column()
    estado: string;

    @Column()
    cnh: string;

    @Column()
    genero: string;

    @Column()
    categoria: string;
     
    @Column()
    historicoInfracoes: string;
    
    @Column()
    historicoAcidentes: string;

    @Column()
    banco: string;

    @Column()
    numeroConta: string;

    @Column()
    digitoVerificador: string;
    
    @Column()
    tipo: string;

    @Column()
    nomeEmergencia: string;

    @Column()
    telefoneEmergencia: string;

    @Column()
    statusConta: string;
    
    @Column()
    @CreateDateColumn()
    dataCriacao: Date;
    
    @Column()
    @UpdateDateColumn()
    dataAtualizacao: Date;

    @OneToOne(() => Veiculo, (veiculo) => veiculo.usuario, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "id_veiculo", referencedColumnName: "id" }])
    idVeiculo2: Veiculo

    @OneToMany(() => Rota, (rota) => rota.idCondutor2)
    rota: Rota[]
    
    // @BeforeInsert()
    // hashPassword(){
    //     this.senha = bcrypt.hashSync(this.senha)
    // }
}