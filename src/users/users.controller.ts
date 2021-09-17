import { UsersService } from './users.service';
import { Controller, Post, Get, Body, Inject } from '@nestjs/common';
import { startuperDto } from './dto/startuper.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  getByEmail(@Body() startuperDto: startuperDto) {
    return this.userService.getStartuperByEmail(startuperDto);
  }
}
