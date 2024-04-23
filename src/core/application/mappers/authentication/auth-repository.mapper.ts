import { Injectable } from '@nestjs/common';
import { Mapper } from '@/base/mapper';
import { AuthenticationEntity } from '@/core/application/interfaces/authentication/authentication.entity';
import { AuthenticationResponseDto } from '@/core/domain/entities/authentication.entity';

@Injectable()
export class AuthImplementationRepositoryMapper extends Mapper<
  AuthenticationResponseDto,
  AuthenticationEntity
> {
  mapFrom(param: AuthenticationResponseDto): AuthenticationEntity {
    const userAuthenticated = param.properties.UserAuthenticated[0];
    return {
      properties: {
        UserAuthenticated: {
          username: userAuthenticated.username,
          name: userAuthenticated.Name,
          lastName: userAuthenticated.lastName.trim(),
          phone: userAuthenticated.phone,
          email: userAuthenticated.email,
          roles: userAuthenticated.roles.map((role) => ({
            NameRole: role.NameRole,
            idRole: role.idRol,
          })),
        },
      },
    };
  }

  mapTo(param: AuthenticationEntity): AuthenticationResponseDto {
    const userAuthenticated = param.properties.UserAuthenticated[0];
    return {
      properties: {
        UserAuthenticated: {
          username: userAuthenticated.username,
          name: userAuthenticated.Name,
          lastName: userAuthenticated.lastName.trim(),
          phone: userAuthenticated.phone,
          email: userAuthenticated.email,
          roles: userAuthenticated.roles.map((role) => ({
            nameRol: role.NameRole,
            idRol: role.idRol,
          })),
        },
      },
    };
  }
}
