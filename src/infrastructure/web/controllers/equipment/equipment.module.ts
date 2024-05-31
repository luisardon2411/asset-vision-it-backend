import { Module } from '@nestjs/common';
import { EquipmentController } from '@/infrastructure/web/controllers/equipment/equipment.controller';
import { RegisterEquipmentUseCase } from '@/core/domain/usecases/devices/register-equipment.usecase';
import { EquipmentRepository } from '@/core/domain/repository/device/equipment.repository';
import { EquipmentService } from '@/infrastructure/providers/equipment/equipment.service';
import { LoggerService } from '@/infrastructure/providers/logger.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentEntity } from '@/core/application/interfaces/device/equipment.entity';

const RegisterEquipmentUseCaseFactory = (EquipmentRepo: EquipmentRepository) =>
  new RegisterEquipmentUseCase(EquipmentRepo);
export const RegisterEquipmentUseCaseProvider = {
  provide: RegisterEquipmentUseCase,
  useFactory: RegisterEquipmentUseCaseFactory,
  deps: [EquipmentRepository],
};

@Module({
  imports: [TypeOrmModule.forFeature([EquipmentEntity])],
  controllers: [EquipmentController],
  providers: [
    RegisterEquipmentUseCaseProvider,
    EquipmentService,
    LoggerService,
  ],
  exports: [],
})
export class EquipmentModule {}
