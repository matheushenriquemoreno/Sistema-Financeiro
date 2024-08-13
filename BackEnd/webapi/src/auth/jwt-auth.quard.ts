import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// está  ligado a jwt Estrategia
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt-verify') {}