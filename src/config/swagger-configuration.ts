import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export class SwaggerConfigService {
  static setup(app: INestApplication): void {
    const options = new DocumentBuilder()
      .setTitle('Asset Vision IT API')
      .setDescription('The Asset Vision IT API description')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('asset-vision-it-api', app, document);
  }
}
