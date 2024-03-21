import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AirflowModule } from './airflow/airflow.module';
import { OmsModule } from './oms/oms.module';
import { CombinedController } from './combined.controller';

import * as fs from 'fs';
@Module({
  imports: [
    AirflowModule,
    OmsModule,
    JwtModule.register({
      global: true,
      secret: fs.readFileSync('/Users/himanshu.shekher/key.pub'),
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [CombinedController],
})
export class AppModule {}
