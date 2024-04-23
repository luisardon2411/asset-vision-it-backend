import { Injectable, Logger } from '@nestjs/common';
import { ILogger } from '../log/ILogger.log';
/***
 * LoggerService class
 * @class
 * @constructor
 * @public
 * @description Clase que se encarga de manejar los logs de la aplicación
 * @version 1.0.0
 * @example
 * LoggerService loggerService = new LoggerService();
 * loggerService.log('context', 'message');
 * @returns void
 * @see https://docs.nestjs.com/techniques/logger
 * @author Luis Ardón
 */
@Injectable()
export class LoggerService extends Logger implements ILogger {
  debug(context: string, message: string) {
    if (process.env.NODE_ENV !== 'production') {
      super.debug(`[DEBUG] ${message}`, context);
    }
  }
  log(context: string, message: string) {
    super.log(`[INFO] ${message}`, context);
  }
  error(context: string, message: string, trace?: string) {
    super.error(`[ERROR] ${message}`, trace, context);
  }
  warn(context: string, message: string) {
    super.warn(`[WARN] ${message}`, context);
  }
  verbose(context: string, message: string) {
    if (process.env.NODE_ENV !== 'production') {
      super.verbose(`[VERBOSE] ${message}`, context);
    }
  }
}
