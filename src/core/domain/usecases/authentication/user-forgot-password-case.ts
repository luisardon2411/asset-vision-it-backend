import { UseCase } from '@/base/use-case';
import { AuthRepository } from '@/core/domain/repository/authentication/auth.repository';
import { AuthenticationCreateDto } from '@/infrastructure/web/dtos/authentication/authentication.dto';
import { AuthenticationResponseDto } from '@/core/domain/entities/authentication.entity';

export class UserForgotPasswordCase
  implements
    UseCase<{ username: string; codeOtp?: string }, AuthenticationResponseDto>
{
  constructor(private authRepository: AuthRepository) {}
  execute(state: AuthenticationCreateDto): Promise<AuthenticationResponseDto> {
    return this.authRepository.forgotPassword(state);
  }
}
