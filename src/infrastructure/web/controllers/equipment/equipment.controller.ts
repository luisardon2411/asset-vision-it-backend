import { EquipmentService } from '@/infrastructure/providers/equipment/equipment.service';
import { Body, Controller, HttpStatus, Post, UseFilters } from '@nestjs/common';
import { EquipmentRegisterDto } from '@/infrastructure/web/dtos/equipment/equipment-register.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '@/core/domain/filters/http-exception.filter';
import { ResponseFormat } from '@/core/application/interceptors/response.interceptor';
/**
 * EquipmentController class
 * @class
 * @constructor equipmentService
 * @public
 * @param equipmentService parametro de tipo EquipmentService que representa el servicio de equipos
 * @returns EquipmentController
 * @description Controlador que se encarga de manejar el registro de los equipos mediante el agente recolector.
 * @version 1.0.0
 * @example
 * import { EquipmentController } from '@/infrastructure/web/controllers/equipment/equipment.controller';
 * @see https://docs.nestjs.com/controllers
 * @author Luis Ardón
 */
@Controller('agent/equipment')
@ApiTags('Agent Register Equipment')
@UseFilters(new HttpExceptionFilter())
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post('/register-equipment')
  @ApiResponse({ status: 200, type: ResponseFormat })
  async registerEquipment(@Body() equipment: EquipmentRegisterDto) {
    const response = await this.equipmentService.registerEquipment(equipment);
    return { data: response, statusCode: HttpStatus.OK };
  }
}
