import { CustomHttpException } from '@/core/domain/exceptions/custom-http.exception';
import { HttpStatus } from '@nestjs/common';

export class AccountBlockedError extends CustomHttpException {
  constructor(message: string) {
    super(message, HttpStatus.FORBIDDEN);
  }
}
