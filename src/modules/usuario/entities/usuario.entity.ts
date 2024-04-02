import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("usuario")
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

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

    // @BeforeInsert()
    // hashPassword(){
    //     this.senha = bcrypt.hashSync(this.senha)
    // }
}