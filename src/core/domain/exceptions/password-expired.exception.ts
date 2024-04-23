import { HttpStatus } from '@nestjs/common';
import { CustomHttpException } from '@/core/domain/exceptions/custom-http.exception';
export class PasswordExpiredError extends CustomHttpException {
  constructor(message: string) {
    super(message, HttpStatus.UNAUTHORIZED);
  }
}
