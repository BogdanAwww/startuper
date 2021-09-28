import { loginDto } from './dto/login.dto';
import { userDto } from './../users/dto/user.dto';
import { UsersService } from './../users/users.service';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async createUser(dto: userDto) {
    const candidate = await this.userService.getUserByEmail(dto);
    if (candidate) {
      throw new HttpException(
        'User with this email already exist',
        HttpStatus.CONFLICT,
      );
    }
    const user = await this.userService.createUser(dto);
    return user;
  }

  async login(dto: loginDto) {
    const user = await this.userService.getUser(dto);
    if (!user) {
      throw new HttpException(
        'Password or email incorrect',
        HttpStatus.FORBIDDEN,
      );
    }
    const payload = {
      username: user.username,
      surname: user.surname,
      _id: user._id,
    };
    return {
      username: user.username,
      surname: user.surname,
      email: user.email,
      token: this.jwtService.sign(payload),
    };
  }
}
