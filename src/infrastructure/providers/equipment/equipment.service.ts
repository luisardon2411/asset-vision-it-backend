import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EquipmentEntity } from '@/core/application/interfaces/device/equipment.entity';
import { LoggerService } from '@/infrastructure/providers/logger.service';
import { EquipmentRepository } from '@/core/domain/repository/device/equipment.repository';
import { EquipmentRegisterDto } from '@/infrastructure/web/dtos/equipment/equipment-register.dto';
import { EquipmentRegisterResponse } from '@/core/domain/entities/register-equipment.entity';
import { throwAppropiateException } from '@/infrastructure/web/utils/throw-appropiate-exception.function';

@Injectable()
export class EquipmentService extends EquipmentRepository {
  constructor(
    @InjectRepository(EquipmentEntity)
    private readonly equipmentRepository: Repository<EquipmentEntity>,
    private readonly loggerService: LoggerService,
  ) {
    super();
  }
  async registerEquipment(
    equipment: EquipmentRegisterDto,
  ): Promise<EquipmentRegisterResponse> {
    try {
      const response = await this.equipmentRepository.query(
        'EXEC [dbo].[sp_AgentRegisterNewEquipment] @0, @1, @2, @3, @4, @5, @6, @7, @8, @9, @10, @11, @12, @13, @14, @15, @16, @17, @18, @19, @20, @21, @22, @23, @24, @25, @26, @27, @28, @29, @30, @31, @32, @33',
        [
          equipment.IdStation,
          equipment.DeviceNameModel,
          equipment.DeviceManufacturer,
          equipment.DeviceTypeComputer,
          equipment.DeviceArchitecture,
          equipment.DevicePrincipalUser,
          equipment.MoboManufacturer,
          equipment.MoboVersion,
          equipment.MoboSerialNumber,
          equipment.DescriptionMobo,
          equipment.BiosManufacturer,
          equipment.BiosVersion,
          equipment.BiosSerialNumber,
          equipment.BiosUUID,
          equipment.IdProcessor,
          equipment.ProcessorDescription,
          equipment.ProcessorFrecuence,
          equipment.ProcessorCoreNumber,
          equipment.ProcessorLogicalCore,
          equipment.TotalMemoryPhysical,
          equipment.TotalSlotsUsed,
          equipment.RAMSlotsData,
          equipment.ManufacturerStorage,
          equipment.InterfaceStorage,
          equipment.CapacityStorage,
          equipment.PartitionStorage,
          equipment.SerialNumberStorage,
          equipment.FirmwareStorage,
          equipment.NameVolumenStorage,
          equipment.FreeSpaceStorage,
          equipment.TotalSpaceStorage,
          equipment.CompresionSystemStorage,
          equipment.TypePartitionStorage,
          equipment.NetworkData,
        ],
      );
      return { properties: { response: response[0].response } };
    } catch (error) {
      this.loggerService.warn(error, error);
      throwAppropiateException(error.originalError.info.message);
    }
  }

  async getTotalEquipment() {
    try {
      const response = await this.equipmentRepository.query(
        'select COUNT(*) as TotalDispositivos from AssetVisionIT.dbo.AVIT_Devices',
      );
      return { properties: { response: response } };
    } catch (error) {
      this.loggerService.warn(error, error);
      throwAppropiateException(error.originalError.info.message);
    }
  }
}
