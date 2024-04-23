import { ApiProperty } from '@nestjs/swagger';

export class BadRequestLoginResponse {
  @ApiProperty({
    examples: ['usuario y/o contraseña incorrectos', 'usuario bloqueado'],
  })
  public message: string;
  @ApiProperty({ example: 'Bad Request' })
  public error: string;
  @ApiProperty({ example: 400 })
  public statusCode: number;
}
