import { AuthService } from './auth.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { startuperDto } from 'src/dto/startuper.dto';
import { investorDto } from 'src/dto/investor.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('startuper')
  registrationStartuper(@Body() startuperDto: startuperDto) {
    return this.authService.registrationStartuper(startuperDto);
  }

  @Post('investor')
  registrationInvestor(@Body() investorDto: investorDto) {
    return 'hello investor';
  }
}
