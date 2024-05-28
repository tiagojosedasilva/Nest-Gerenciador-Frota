import { ApiProperty } from "@nestjs/swagger";

export class CreateUsuarioDto {
    @ApiProperty({ example: 'nome', description: 'O nome do usuario' })
    nome: string | null;
    
    idCliente: number | null

    idVeiculo: number | null;

    @ApiProperty({ example: 'email', description: 'O email do usuario' })
    email: string | null;

    @ApiProperty({ example: 'senha', description: 'O senha do usuario' })
    senha: string | null;
    
    tipoUsuario: number | null;
    
    cpf: string | null;

    rg: string | null;
    
    dataNascimento: string | null;
    
    celular: string | null;
    
    endereco: string | null;
    
    cep: string | null;
    
    cidade: string | null;
    
    estado: string | null;
    
    statusConta: string | null;

    cnh: string | null;

    genero: string | null;

    categoria: string | null;
    
    historicoInfracoes: string | null;

    historicoAcidentes: string | null;

    banco: string | null;

    numeroConta: string | null;

    digitoVerificador: string | null;

    tipo: string | null;

    nomeEmergencia: string | null;

    telefoneEmergencia: string | null;

    validade: string | null;
}
