import { HttpException, HttpStatus } from '@nestjs/common';
/***
 * CustomHttpException class
 * @class
 * @extends HttpException
 * @constructor message, status
 * @public
 * @param message parametro de tipo string que representa el mensaje de error
 * @param status parametro de tipo HttpStatus (enum)
 * @returns CustomHttpException
 * @description Clase que extiende de HttpException y que se encarga de manejar las excepciones personalizadas
 * @version 1.0.0
 * @author Luis Ardón
 */
export class CustomHttpException extends HttpException {
  constructor(message: string, status: HttpStatus) {
    super(message, status);
  }
}
