import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { investorDto } from './dto/investor.dto';
import { startuperDto } from './dto/startuper.dto';
import { Startuper, StartuperDocument } from './schema/startuper.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Startuper.name)
    private startuperModel: Model<StartuperDocument>,
  ) {}

  async createStartuper(dto: startuperDto) {
    const startuper = await this.startuperModel.create(dto);
    return startuper;
  }

  async createInvestor(dto: investorDto) {}

  async getAll() {}

  async getStartuperByEmail(dto: startuperDto) {
    const startuper = await this.startuperModel.findOne({ email: dto.email });
    return startuper;
  }
}
