import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthenticationCreateDto } from '@/infrastructure/web/dtos/authentication/authentication.dto';
import { AuthRepository } from '@/core/domain/repository/authentication/auth.repository';
import { LoggerService } from '@/infrastructure/providers/logger.service';
import { AuthenticationEntity } from '@/core/application/interfaces/authentication/authentication.entity';
import { EncryptionService } from '@/infrastructure/providers/criptography.provider';
import { cleanAndParseJSON } from '@/infrastructure/web/utils/clean-and-parser-json.util';
import { throwAppropiateException } from '@/infrastructure/web/utils/throw-appropiate-exception.function';
import { AuthImplementationRepositoryMapper } from '@/core/application/mappers/authentication/auth-repository.mapper';
import { EmailService } from '@/templates/email.service';
import { template2FA } from '@/templates/template-2FA';

@Injectable()
export class AuthenticationService extends AuthRepository {
  constructor(
    @InjectRepository(AuthenticationEntity)
    private readonly authRepository: Repository<AuthenticationEntity>,
    private readonly loggerService: LoggerService,
    private readonly encryptionService: EncryptionService,
    private readonly authImplementation: AuthImplementationRepositoryMapper,
    private readonly emailService: EmailService,
  ) {
    super();
  }

  async login(
    authCreateDTo: AuthenticationCreateDto,
  ): Promise<AuthenticationEntity> {
    try {
      const password = this.encryptionService.encryptPassword(
        authCreateDTo.password,
      );
      const response = await this.authRepository.query(
        'EXEC [dbo].[sp_login] @0, @1, @2',
        [authCreateDTo.username, password, authCreateDTo.codeOtp],
      );
      if (response[0].response) {
        const { code2FA, name, email } = response[0];
        const message = response[0].response;
        this.emailService.sendEmail(
          'Autenticacion de usuario',
          template2FA(code2FA, name),
          email,
        );
        if (code2FA) {
          return {
            properties: {
              UserAuthenticated: {
                codeOtp: code2FA,
                username: '',
                name: '',
                lastName: '',
                phone: '',
                email: '',
                roles: [],
              },
            },
          };
        }
        return { properties: { UserAuthenticated: message } };
      }
      const cleanJSON = cleanAndParseJSON(response[0].params);
      return this.authImplementation.mapTo({ properties: cleanJSON });
    } catch (error) {
      this.loggerService.warn(error, error);
      throwAppropiateException(error.originalError.info.message);
    }
  }
  async forgotPassword(
    authCreateDto: AuthenticationCreateDto,
  ): Promise<AuthenticationEntity> {
    try {
      const password = this.encryptionService.encryptPassword(
        authCreateDto.password,
      );
      const response = await this.authRepository.query(
        'EXEC [dbo].[sp_userChangePassword] @0, @1',
        [authCreateDto.username, password],
      );
      return { response } as any;
    } catch (error) {
      throwAppropiateException(error.originalError.info.message);
    }
  }
}
