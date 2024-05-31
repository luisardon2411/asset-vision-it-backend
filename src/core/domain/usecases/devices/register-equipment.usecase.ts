import { UseCase } from '@/base/use-case';
import { EquipmentRegisterDto } from '@/infrastructure/web/dtos/equipment/equipment-register.dto';
import { EquipmentRegisterResponse } from '@/core/domain/entities/register-equipment.entity';
import { EquipmentRepository } from '@/core/domain/repository/device/equipment.repository';

export class RegisterEquipmentUseCase
  implements UseCase<EquipmentRegisterDto, EquipmentRegisterResponse>
{
  constructor(private equipmentRepository: EquipmentRepository) {}
  execute(state: EquipmentRegisterDto): Promise<EquipmentRegisterResponse> {
    return this.equipmentRepository.registerEquipment(state);
  }
}
