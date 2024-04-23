import { HttpStatus } from '@nestjs/common';
import { CustomHttpException } from './custom-http.exception';
/***
 * InvalidCodeOtpException class
 * @class
 * @extends CustomHttpException
 * @constructor message
 * @public
 * @param message parametro de tipo string que representa el mensaje de error
 * @returns InvalidCodeOtpException
 * @description Clase que extiende de CustomHttpException y que se encarga de manejar las excepciones personalizadas
 * @version 1.0.0
 * @author Luis Ardón
 * @example
 * throw new InvalidCodeOtpException('Codigo invalido, intenta nuevamente.');
 */
export class InvalidCodeOtpException extends CustomHttpException {
  constructor(message: string) {
    super(message, HttpStatus.FORBIDDEN);
  }
}
