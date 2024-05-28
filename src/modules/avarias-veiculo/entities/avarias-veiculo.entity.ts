import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class AvariasVeiculo {

    @PrimaryGeneratedColumn()
    id: number;
}
