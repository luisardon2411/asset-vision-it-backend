import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    const properties = {
      response: this.getErrorMessage(exception),
    };

    response.status(status).json({
      path: request.url,
      statusCode: status,
      method: request.method,
      timestamp: new Date().toISOString(),
      payload: Buffer.from(JSON.stringify({ properties })).toString('base64'),
    });
  }
  private getErrorMessage(exception: unknown): string {
    if (typeof exception === 'string') {
      return exception;
    } else if (
      exception instanceof HttpException &&
      typeof exception.getResponse() === 'object'
    ) {
      const exceptionResponse = exception.getResponse();
      return (
        (exceptionResponse as any).message || (exceptionResponse as any).error
      );
    } else if (exception instanceof Error) {
      return exception.message;
    } else {
      return 'Unknown error occurred';
    }
  }
}
