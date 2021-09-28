import { UsersService } from './users.service';
import { Controller, Post, Get, Body, Inject } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
}
