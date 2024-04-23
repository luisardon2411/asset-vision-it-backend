class RoleDto {
  NameRole: string;
  idRol: number;
}

class UserAthenticatedDto {
  constructor(
    public username: string,
    public name: string,
    public lastName: string,
    public phone: string,
    public email: string,
    public roles: RoleDto[],
  ) {}
}

export class AuthenticationResponseDto {
  properties: {
    UserAuthenticated: UserAthenticatedDto;
  };
}
