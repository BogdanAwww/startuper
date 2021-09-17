import { UsersService } from './../users/users.service';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { startuperDto } from '../users/dto/startuper.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async registrationStartuper(dto: startuperDto) {
    let startuper = await this.userService.getStartuperByEmail(dto);
    if (startuper) {
      throw new HttpException(
        'User with this email already exist',
        HttpStatus.BAD_REQUEST,
      );
    }
    startuper = await this.userService.createStartuper(dto);
    return startuper;
  }

  // async registrationInvestor() {}
}
