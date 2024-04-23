import { AccountBlockedError } from '@/core/domain/exceptions/account-blocked.exception';
import { CredentialsIncorrectError } from '@/core/domain/exceptions/credentials-incorrect.exception';
import { CustomHttpException } from '@/core/domain/exceptions/custom-http.exception';
import { InvalidCodeOtpException } from '@/core/domain/exceptions/invalid-code-otp.exception';
import { PasswordExpiredError } from '@/core/domain/exceptions/password-expired.exception';
import { HttpStatus } from '@nestjs/common';
/***
 * throwAppropiateException function
 * @function
 * @param errorMessage parametro de tipo string que representa el mensaje de error
 * @returns void
 * @description Función que se encarga de manejar las excepciones personalizadas
 * @version 1.0.0
 * @example
 * throwAppropiateException('Usuario y/o contraseña incorrectas');
 * @throws CredentialsIncorrectError
 * @author Luis Ardón
 * @see https://www.npmjs.com/package/@nestjs/common
 */
export function throwAppropiateException(errorMessage: string) {
  switch (errorMessage) {
    case 'Usuario y/o contraseña incorrectas':
      throw new CredentialsIncorrectError(errorMessage);
    case 'Tu cuenta se encuentra bloqueada, por favor contacta a soporte.':
      throw new AccountBlockedError(errorMessage);
    case 'Tu contraseña ha expirado, cambiala inmediantamente.':
      throw new PasswordExpiredError(errorMessage);
    case 'Codigo invalido, intenta nuevamente.':
      throw new InvalidCodeOtpException(errorMessage);
    default:
      throw new CustomHttpException(errorMessage, HttpStatus.BAD_REQUEST);
  }
}
