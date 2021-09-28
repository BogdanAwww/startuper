import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { userDto } from 'src/users/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('create')
  createUser(@Body() dto: userDto) {
    return this.authService.createUser(dto);
  }

  @Post('login')
  login(@Body() dto: loginDto) {
    return this.authService.login(dto);
  }
}
