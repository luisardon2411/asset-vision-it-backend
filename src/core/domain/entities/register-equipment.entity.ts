export class RegisterEquipment {
  stationId: number;
  deviceNameModel: string;
  deviceManufacturer: string;
  deviceTypeComputer: string;
  deviceArchitecture: string;
  devicePrincipalUser: string;
  moboManufacturer: string;
  moboVersion: string;
  moboSerialNumber: string;
  descriptionMobo: string;
  biosManufacturer: string;
  biosVersion: string;
  biosSerialNumber: string;
  biosUUID: string;
  processorId: string;
  processorDescription: string;
  processorFrequency: string;
  processorCoreNumber: number;
  processorLogicalCore: number;
  totalPhysicalMemory: string;
  totalSlotsUsed: number;
  ramSlotData: Record<string, any>;
  manufacturerStorage: string;
  interfaceStorage: string;
  capacityStorage: string;
  partitionStorage: number;
  serialNumberStorage: string;
  firmwareStorage: string;
  nameVolumeStorage: string;
  freeSpaceStorage: string;
  totalSpaceStorage: string;
  compressionSystemStorage: string;
  typePartitionStorage: string;
  networkData: Record<string, any>;
}

export class EquipmentRegisterResponse {
  properties: { response: string };
}
