import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Startuper, StartuperSchema } from './schema/startuper.schema';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Startuper.name,
        schema: StartuperSchema,
      },
    ]),
  ],
  exports: [UsersService],
})
export class UsersModule {}
