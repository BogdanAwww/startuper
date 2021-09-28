import { loginDto } from './../auth/dto/login.dto';
import { User, UserDocument } from './schema/user.schema';
import { userDto } from './dto/user.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async createUser(dto: userDto) {
    const user = await this.userModel.create(dto);
    return user;
  }

  async getUserByEmail(dto: userDto) {
    const user = await this.userModel.findOne({ email: dto.email });
    return user;
  }

  async getUser(dto: loginDto) {
    const user = await this.userModel.findOne(dto);
    return user;
  }
}
