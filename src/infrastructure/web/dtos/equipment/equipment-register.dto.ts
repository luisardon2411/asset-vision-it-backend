// equipment-register.dto.ts
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsObject,
  IsString,
  MaxLength,
} from 'class-validator';

export class EquipmentRegisterDto {
  @IsInt()
  @IsNotEmpty()
  readonly IdStation: number;

  @IsString()
  @MaxLength(200)
  readonly DeviceNameModel: string;

  @IsString()
  @MaxLength(200)
  readonly DeviceManufacturer: string;

  @IsString()
  @MaxLength(100)
  readonly DeviceTypeComputer: string;

  @IsString()
  @MaxLength(50)
  readonly DeviceArchitecture: string;

  @IsString()
  @MaxLength(100)
  readonly DevicePrincipalUser: string;

  @IsString()
  @MaxLength(100)
  readonly MoboManufacturer: string;

  @IsString()
  @MaxLength(100)
  readonly MoboVersion: string;

  @IsString()
  @MaxLength(100)
  readonly MoboSerialNumber: string;

  @IsString()
  @MaxLength(100)
  readonly DescriptionMobo: string;

  @IsString()
  @MaxLength(100)
  readonly BiosManufacturer: string;

  @IsString()
  @MaxLength(100)
  readonly BiosVersion: string;

  @IsString()
  @MaxLength(100)
  readonly BiosSerialNumber: string;

  @IsString()
  @MaxLength(100)
  readonly BiosUUID: string;

  @IsString()
  @MaxLength(100)
  readonly IdProcessor: string;

  @IsString()
  @MaxLength(200)
  readonly ProcessorDescription: string;

  @IsString()
  @MaxLength(100)
  readonly ProcessorFrecuence: string;

  @IsInt()
  readonly ProcessorCoreNumber: number;

  @IsInt()
  readonly ProcessorLogicalCore: number;

  @IsString()
  @MaxLength(70)
  readonly TotalMemoryPhysical: string;

  @IsInt()
  readonly TotalSlotsUsed: number;

  @IsObject()
  @Type(() => Object)
  readonly RAMSlotsData: Record<string, any>;

  @IsString()
  @MaxLength(100)
  readonly ManufacturerStorage: string;

  @IsString()
  @MaxLength(100)
  readonly InterfaceStorage: string;

  @IsString()
  @MaxLength(100)
  readonly CapacityStorage: string;

  @IsInt()
  readonly PartitionStorage: number;

  @IsString()
  @MaxLength(100)
  readonly SerialNumberStorage: string;

  @IsString()
  @MaxLength(100)
  readonly FirmwareStorage: string;

  @IsString()
  @MaxLength(20)
  readonly NameVolumenStorage: string;

  @IsString()
  @MaxLength(100)
  readonly FreeSpaceStorage: string;

  @IsString()
  @MaxLength(100)
  readonly TotalSpaceStorage: string;

  @IsString()
  @MaxLength(100)
  readonly CompresionSystemStorage: string;

  @IsString()
  @MaxLength(100)
  readonly TypePartitionStorage: string;

  @Type(() => Object)
  readonly NetworkData: Record<string, any>;
}
