import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfigService } from '@/config/swagger-configuration';
import { LogginInterceptor } from '@/core/application/interceptors/loggin.interceptor';
import { LoggerService } from './infrastructure/providers/logger.service';
import { ResponseInterceptor } from './core/application/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // set the global prefix
  app.setGlobalPrefix('api/v1');
  // setup the swagger
  SwaggerConfigService.setup(app);
  // register the interceptor
  app.useGlobalInterceptors(new LogginInterceptor(new LoggerService()));
  app.useGlobalInterceptors(new ResponseInterceptor());
  // enable cors
  app.enableCors({ origin: '*', methods: 'GET,POST' });
  // start the app
  await app.listen(3000);
}
bootstrap();
