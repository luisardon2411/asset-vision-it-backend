import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';

class Role {
  public NameRole: string;
  public idRol: number;
}
class UserEntity {
  @ApiProperty({ example: 'nombre.apellido', description: 'Nombre de usuario' })
  public username: string;
  @ApiProperty({ example: 'Luis Damian', description: 'Nombre' })
  public name: string;
  @ApiProperty({ example: 'Pérez Gómez', description: 'Nombre' })
  public lastName: string;
  @ApiProperty({ example: '123456789', description: 'Número de teléfono' })
  public phone: string;
  @ApiProperty({
    example: 'example@email.com',
    description: 'Correo electrónico',
  })
  public email: string;
  @ApiProperty({ example: '667312', description: 'codigo de doble factor' })
  public codeOtp?: string;
  @ApiProperty({ example: 'ADMIN', description: 'Roles del usuario' })
  public roles: Role[];
}

@Entity()
export class AuthenticationEntity {
  @Column()
  @ApiProperty({ example: UserEntity, description: 'Usuario autenticado' })
  properties: { UserAuthenticated: UserEntity };
}
