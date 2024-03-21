import { Controller, Post, Headers } from '@nestjs/common';
import { OmsService } from './oms/oms.service';
import { AirflowService } from './airflow/airflow.service';

@Controller()
export class CombinedController {
  constructor(
    private readonly airflowService: AirflowService,
    private readonly omsService: OmsService,
  ) {}

  @Post('/generate-token')
  generateToken() {
    const token = this.airflowService.generateToken();
    return { token };
  }

  @Post('/validate-token')
  validateToken(@Headers('x-smtip-auth') authorizationHeader: string) {
    const token = authorizationHeader.split(' ')[1];
    const decodedToken = this.omsService.validateToken(token);
    return decodedToken;
  }
}
