import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class OmsService {
  private publicKeyPath: string;

  constructor() {
    this.publicKeyPath =
      '/Users/himanshu.shekher/Desktop/jwtnew/public-key.pem';
  }

  async validateToken(token: string): Promise<any> {
    try {
      const publicKey = fs.readFileSync(this.publicKeyPath, 'utf8');
      // const privateKey = fs.readFileSync(
      //   '/Users/himanshu.shekher/Desktop/jwtnew/private-key.pem',
      //   'utf8',
      // );
      //const publicKey = 'gfdkhhfkdjghkfdgs';
      const decoded = jwt.verify(token, publicKey);
      console.log(decoded);
      return decoded;
    } catch (error) {
      //throw new Error(`Invalid token: ${error.message}`);
      throw new UnauthorizedException('Invalid token');
    }
  }
}
