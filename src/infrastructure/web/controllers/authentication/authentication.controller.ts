import { AuthenticationService } from '@/infrastructure/providers/authentication/authentication.service';
import { Body, Controller, HttpStatus, Post, UseFilters } from '@nestjs/common';
import { ApiBadRequestResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationCreateDto } from '@/infrastructure/web/dtos/authentication/authentication.dto';
import { BadRequestLoginResponse } from '@/infrastructure/web/presentation/authentication/login-badrequest.presentation';
import { HttpExceptionFilter } from '@/core/domain/filters/http-exception.filter';
import { ResponseFormat } from '@/core/application/interceptors/response.interceptor';
/***
 * AuthenticationController class
 * @class
 * @constructor authenticationService
 * @public
 * @param authenticationService parametro de tipo AuthenticationService que representa el servicio de autenticación
 * @returns AuthenticationController
 * @description Controlador que se encarga de manejar la autenticación de los usuarios
 * @version 1.0.0
 * @example
 * import { AuthenticationController } from '@/infrastructure/web/controllers/authentication/authentication.controller';
 * @see https://docs.nestjs.com/controllers
 * @author Luis Ardón
 */
@Controller('auth')
@ApiTags('Athentication')
@UseFilters(new HttpExceptionFilter())
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}
  @ApiBadRequestResponse({
    type: BadRequestLoginResponse,
    status: 400,
  })
  @ApiResponse({ status: 200, type: ResponseFormat })
  @Post('login')
  async login(@Body() authCreateDto: AuthenticationCreateDto) {
    const response = await this.authenticationService.login(authCreateDto);
    return { data: response, statusCode: HttpStatus.OK };
  }
}
