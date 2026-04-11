import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export interface JwtPayload {
  sub: string;
  tenantId?: string;
}

export class AuthService {
  sign(payload: JwtPayload) {
    return jwt.sign(payload, env.JWT_SECRET, { expiresIn: '1h' });
  }

  verify(token: string) {
    return jwt.verify(token, env.JWT_SECRET) as JwtPayload;
  }
}
