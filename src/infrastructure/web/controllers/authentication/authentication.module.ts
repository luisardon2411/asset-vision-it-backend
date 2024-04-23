import { AuthRepository } from '@/core/domain/repository/authentication/auth.repository';
import { UserLoginCase } from '@/core/domain/usecases/authentication/user-login-case';
import { Module } from '@nestjs/common';
import { AuthenticationController } from '@/infrastructure/web/controllers/authentication/authentication.controller';
import { AuthenticationService } from '@/infrastructure/providers/authentication/authentication.service';
import { AuthenticationEntity } from '@/core/application/interfaces/authentication/authentication.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncryptionService } from '@/infrastructure/providers/criptography.provider';
import { LoggerService } from '@/infrastructure/providers/logger.service';
import { AuthImplementationRepositoryMapper } from '@/core/application/mappers/authentication/auth-repository.mapper';
import { EmailService } from '@/templates/email.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

const AuthLoginUseCaseFactory = (AuthRepo: AuthRepository) =>
  new UserLoginCase(AuthRepo);
export const AuthLoginUseCaseProvider = {
  provide: UserLoginCase,
  useFactory: AuthLoginUseCaseFactory,
  deps: [AuthRepository],
};
/***
 * AuthenticationModule class
 * @class
 * @module AuthenticationModule
 * @description Modulo que se encarga de manejar la autenticación de los usuarios
 * @version 1.0.0
 * @example
 * import { AuthenticationModule } from '@/infrastructure/web/controllers/authentication/authentication.module';
 * @see https://docs.nestjs.com/modules
 * @see https://docs.nestjs.com/providers
 * @see https://docs.nestjs.com/recipes/sql-typeorm
 * @see https://docs.nestjs.com/exception-filters
 * @author Luis Ardón
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([AuthenticationEntity]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '7h' },
        };
      },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [
    AuthLoginUseCaseProvider,
    AuthenticationService,
    LoggerService,
    EncryptionService,
    AuthImplementationRepositoryMapper,
    EmailService,
  ],
  exports: [TypeOrmModule],
})
export class AuthenticationModule {}
