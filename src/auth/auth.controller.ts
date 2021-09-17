import { AuthService } from './auth.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { startuperDto } from '../users/dto/startuper.dto';
import { investorDto } from '../users/dto/investor.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('registration/startuper')
  registrationStartuper(@Body() startuperDto: startuperDto) {
    return this.authService.registrationStartuper(startuperDto);
  }

  // @Post('registration/investor')
  // registrationInvestor(@Body() investorDto: investorDto) {
  //   return 'hello investor';
  // }
}
