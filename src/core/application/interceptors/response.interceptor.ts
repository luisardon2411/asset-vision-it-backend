import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Observable, map } from 'rxjs';

/**`
 * @interface ResponseBase
 * @description Interfaz que extiende atributos de la respuesta de la solicitud
 * @property {number} statusCode - El código de estado de la solicitud
 * @property {any} data - Los datos de la solicitud
 * @example
 * const response: ResponseBase = { statusCode: 200, data: 'datos de la solicitud' };
 * @returns {ResponseBase}
 * @author Luis Ardón
 * @version 1.0.0
 */
export interface ResponseBase {
  statusCode?: number;
  data?: any;
}
/**
 * @class ResponseFormat
 * @description Clase que representa el formato de la respuesta de la solicitud
 * @template T
 * @property {string} path - El path de la solicitud
 * @property {number} statusCode - El código de estado de la solicitud
 * @property {string} method - El método de la solicitud
 * @property {string} duration - La duración de la solicitud
 * @property {T} payload - El cuerpo de la respuesta de la solicitud
 * @example
 * new ResponseFormat({ path: 'api/v1/', statusCode: 200, method: 'GET', duration: '10ms', payload: 'cuerpo en base64' });
 * @returns {ResponseFormat}
 * @author Luis Ardón
 * @version 1.0.0
 */
export class ResponseFormat<T extends ResponseBase> {
  @ApiProperty({ example: 'api/v1/', description: 'El path de la solicitud' })
  path: string;
  @ApiProperty({
    example: 200,
    description: 'El código de estado de la solicitud',
  })
  statusCode?: number;
  @ApiProperty({ example: 'GET', description: 'El método de la solicitud' })
  method: string;
  @ApiProperty({ example: '10ms', description: 'La duración de la solicitud' })
  duration: string;
  @ApiProperty({
    example: 'cuerpo en base64',
    description: 'El cuerpo de la solicitud en base64',
  })
  payload: T;
}

@Injectable()
export class ResponseInterceptor<T extends ResponseBase>
  implements NestInterceptor<T, ResponseFormat<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<ResponseFormat<T>> {
    const now = Date.now();
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();
    const response = httpContext.getResponse();

    return next.handle().pipe(
      map((data) => {
        const duration = `${Date.now() - now}ms`;
        let base64Payload;
        if (typeof data === 'object') {
          base64Payload = Buffer.from(JSON.stringify(data.data)).toString(
            'base64',
          );
        } else if (typeof data === 'string') {
          base64Payload = Buffer.from(data).toString('base64');
        }
        response.status(data.statusCode);
        return {
          path: request.path,
          statusCode: response.statusCode,
          method: request.method,
          duration: duration,
          payload: base64Payload,
        };
      }),
    );
  }
}
