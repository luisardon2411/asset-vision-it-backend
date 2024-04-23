import { SetMetadata } from '@nestjs/common';
import { Role } from '@/core/domain/enum/role.enum';

export const ROLES_KEY = 'roles';
/***
 * Roles decorator
 * @function
 * @param roles parametro de tipo Role que representa el rol del usuario
 * @returns void
 * @description Decorador que se encarga de manejar los roles de los usuarios
 * @version 1.0.0
 * @example
 * Roles(Role.ADMIN)
 * @author Luis Ardón
 */
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
