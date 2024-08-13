import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

const jwtSecret = `
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjosNYdqOQCtVgcw2O1k/L9XkeuRlcFy2+2TB8Z++gEjTUf51GxUF3Hr2wOcg/BKUGftw+kajFnaqIYBqg+mmwNOlNxoYpPPbp0Dyq1Z6sjYV7jzHGlCxLF19LcyUtZ+JsoE2XrqsYV2N3Aga9R/3gbg+kksm33WLaXN6YTpGl4eONGN9LTn4jtGF9Mr9wdDE5FXdPc2OPP4lsKNQUMwoVJJ2x6M/SyCzPin1EgnGx5Ornz5Yuu3JQEfL+lIcd+Z7A53vz7W5o+7aWCCurlyLwN5AGEr/tCeLCM3w42QiUkH7Wqaslj/QHTlHL6B+pZOLefPe0MQzAxGki5mwVAivpQIDAQAB
-----END PUBLIC KEY-----
` 


@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy, 'jwt-verify') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate(payload) {
    return payload;
  }
}