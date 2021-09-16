import { Startuper, StartuperDocument } from './../schemas/startuper.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { startuperDto } from 'src/dto/startuper.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Startuper.name)
    private startuperModel: Model<StartuperDocument>,
  ) {}

  async registrationStartuper(dto: startuperDto): Promise<Startuper> {
    const startuper = await this.startuperModel.create(dto);
    return startuper;
  }

  async registrationInvestor() {}
}
