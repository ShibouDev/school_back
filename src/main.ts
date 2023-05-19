import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: false});
  app.enableCors({credentials: true, origin: true})

  const config = new DocumentBuilder()
  .setTitle('SchoolAPI')
  .setDescription('The school API description')
  .setVersion('1.0')
  .addTag('school')
  .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, document)

  await app.listen(5000);
}
bootstrap();
