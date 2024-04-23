import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
/***
 * AuthenticationCreateDto class
 * @class
 * @module AuthenticationCreateDto
 * @description Clase que se encarga de manejar los datos de autenticación
 * @version 1.0.0
 * @example
 * import { AuthenticationCreateDto } from '@/infrastructure/web/dtos/authentication/authentication.dto';
 * @see https://docs.nestjs.com/controllers#request-payloads
 * @see https://docs.nestjs.com/techniques/validation
 * @author Luis Ardón
 */
export class AuthenticationCreateDto {
  @IsString()
  @ApiProperty({ example: 'nombre.apellido', description: 'Nombre de usuario' })
  @IsNotEmpty()
  public username: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'password', description: 'Contraseña' })
  public password: string;
  @IsString()
  @ApiProperty({ example: '123456', description: 'Código de verificación' })
  @IsOptional()
  public codeOtp?: string;
}
