import { AuthenticationResponseDto } from '@/core/domain/entities/authentication.entity';
import { AuthenticationCreateDto } from '@/infrastructure/web/dtos/authentication/authentication.dto';

export abstract class AuthRepository {
  abstract login(
    authCreateDto: AuthenticationCreateDto,
  ): Promise<AuthenticationResponseDto>;
}
