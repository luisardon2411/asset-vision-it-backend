import { HttpStatus } from '@nestjs/common';
import { CustomHttpException } from '@/core/domain/exceptions/custom-http.exception';

export class TypeComputerException extends CustomHttpException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
