import { EquipmentRegisterDto } from '@/infrastructure/web/dtos/equipment/equipment-register.dto';
import { EquipmentRegisterResponse } from '@/core/domain/entities/register-equipment.entity';

export abstract class EquipmentRepository {
  abstract registerEquipment(
    equipmentRegisterDto: EquipmentRegisterDto,
  ): Promise<EquipmentRegisterResponse>;
}
