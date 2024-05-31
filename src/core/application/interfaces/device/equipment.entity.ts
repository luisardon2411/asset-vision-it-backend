import { ApiProperty } from '@nestjs/swagger';

export class EquipmentEntity {
  @ApiProperty({ example: 1, description: 'Id de la estación' })
  IdStation: number;
  @ApiProperty({ example: 'modelo', description: 'Nombre del modelo' })
  DeviceNameModel: string;
  @ApiProperty({ example: 'HP', description: 'Fabricante del dispositivo' })
  DeviceManufacturer: string;
  @ApiProperty({ example: 'Laptop', description: 'Tipo de dispositivo' })
  DeviceTypeComputer: string;
  @ApiProperty({ example: 'x64', description: 'Arquitectura del dispositivo' })
  DeviceArchitecture: string;
  @ApiProperty({ example: 'usuario', description: 'Usuario principal' })
  DevicePrincipalUser: string;
  @ApiProperty({ example: 'HP', description: 'Fabricante de la tarjeta madre' })
  MoboManufacturer: string;
  @ApiProperty({ example: '1.0', description: 'Versión de la tarjeta madre' })
  MoboVersion: string;
  @ApiProperty({
    example: '123456789',
    description: 'Número de serie de la tarjeta madre',
  })
  MoboSerialNumber: string;
  @ApiProperty({
    example: 'Descripción',
    description: 'Descripción de la tarjeta madre',
  })
  DescriptionMobo: string;
  @ApiProperty({ example: 'HP', description: 'Fabricante del BIOS' })
  BiosManufacturer: string;
  @ApiProperty({ example: '1.0', description: 'Versión del BIOS' })
  BiosVersion: string;
  @ApiProperty({
    example: '123456789',
    description: 'Número de serie del BIOS',
  })
  BiosSerialNumber: string;
  @ApiProperty({ example: '123456789', description: 'UUID del BIOS' })
  BiosUUID: string;
  @ApiProperty({ example: '123456789', description: 'Id del procesador' })
  ProcessorId: string;
  @ApiProperty({ example: 'Intel', description: 'Descripción del procesador' })
  ProcessorDescription: string;
  @ApiProperty({ example: '2.0', description: 'Frecuencia del procesador' })
  ProcessorFrequency: string;
  @ApiProperty({ example: 4, description: 'Número de núcleos del procesador' })
  ProcessorCoreNumber: number;
  @ApiProperty({
    example: 8,
    description: 'Número de núcleos lógicos del procesador',
  })
  ProcessorLogicalCore: number;
  @ApiProperty({ example: '16 GB', description: 'Memoria física total' })
  TotalPhysicalMemory: string;
  @ApiProperty({
    example: 2,
    description: 'Número total de ranuras utilizadas',
  })
  TotalSlotsUsed: number;
  @ApiProperty({
    example: { slot1: '8 GB', slot2: '8 GB' },
    description: 'Datos de las ranuras de RAM',
  })
  RAMSlotData: Record<string, any>;
  @ApiProperty({
    example: 'Crucial',
    description: 'Fabricante del almacenamiento',
  })
  ManufacturerStorage: string;
  @ApiProperty({
    example: 'SATA',
    description: 'Interfaz del almacenamiento',
  })
  InterfaceStorage: string;
  @ApiProperty({
    example: '1 TB',
    description: 'Capacidad del almacenamiento',
  })
  CapacityStorage: string;
  @ApiProperty({
    example: 1,
    description: 'Número de particiones del almacenamiento',
  })
  PartitionStorage: number;
  @ApiProperty({
    example: '123456789',
    description: 'Número de serie del almacenamiento',
  })
  SerialNumberStorage: string;
  @ApiProperty({
    example: '123456789',
    description: 'Firmware del almacenamiento',
  })
  FirmwareStorage: string;
  @ApiProperty({
    example: 'C:',
    description: 'Nombre del volumen del almacenamiento',
  })
  NameVolumeStorage: string;
  @ApiProperty({
    example: '100 GB',
    description: 'Espacio libre del almacenamiento',
  })
  FreeSpaceStorage: string;
  @ApiProperty({
    example: '1 TB',
    description: 'Espacio total del almacenamiento',
  })
  TotalSpaceStorage: string;
  @ApiProperty({
    example: 'NTFS',
    description: 'Sistema de compresión del almacenamiento',
  })
  CompressionSystemStorage: string;
  @ApiProperty({
    example: 'Primaria',
    description: 'Tipo de partición del almacenamiento',
  })
  TypePartitionStorage: string;
  @ApiProperty({
    example: { network1: '', network2: '' },
    description: 'Datos de la red',
  })
  NetworkData: Record<string, any>;
}
