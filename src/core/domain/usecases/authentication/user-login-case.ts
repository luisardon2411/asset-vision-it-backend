import { UseCase } from '@/base/use-case';
import { AuthenticationResponseDto } from '@/core/domain/entities/authentication.entity';
import { AuthRepository } from '@/core/domain/repository/authentication/auth.repository';
import { AuthenticationCreateDto } from '@/infrastructure/web/dtos/authentication/authentication.dto';

export class UserLoginCase
  implements
    UseCase<{ username: string; password: string }, AuthenticationResponseDto>
{
  constructor(private authRepository: AuthRepository) {}
  execute(state: AuthenticationCreateDto): Promise<AuthenticationResponseDto> {
    return this.authRepository.login(state);
  }
}
