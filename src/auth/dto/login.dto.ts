import { ApiProperty } from "@nestjs/swagger"

export class LoginDto{
    @ApiProperty({ example: 'email', description: 'O email do usuario' })
    email: string
    @ApiProperty({ example: 'senha', description: 'A senha do usuario' })
    senha: string
}