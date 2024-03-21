import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as os from 'os';

async function bootstrap() {
  process.env.Himans = os.homedir();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
