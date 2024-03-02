import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuario")
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

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
    dataNascimento: Date;
    
    @Column()
    celular: string;
    
    @Column()
    endereço: string;
    
    @Column()
    cep: string;
    
    @Column()
    cidade: string;
    
    @Column()
    estado: string;
    
    @Column()
    statusConta: string;
    
    @Column()
    dataCriacao: Date;
    
    @Column()
    dataAtualizacao: Date;


}