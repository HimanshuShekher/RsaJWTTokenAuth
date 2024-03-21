import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
@Injectable()
export class AirflowService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(): string {
    try {
      const privateKey = fs.readFileSync(
        '/Users/himanshu.shekher/Desktop/jwtnew/private-key.pem',
        'utf8',
      );
      // const publicKey = fs.readFileSync(
      //   '/Users/himanshu.shekher/Desktop/jwtnew/public-key.pem',
      //   'utf8',
      // );
      const payload = { username: 'john.doe' };
      const token = jwt.sign(payload, privateKey, {
        algorithm: 'RS256',
      });

      return token;
    } catch (error) {
      throw new Error(`Failed to generate token: ${error.message}`);
    }
  }
}
