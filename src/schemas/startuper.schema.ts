import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StartuperDocument = Startuper & Document;

@Schema()
export class Startuper {
  @Prop({ required: true, type: String })
  username: string;

  @Prop({ required: true, type: String })
  usersurname: string;

  @Prop({ required: true, type: String })
  email: string;

  @Prop({ required: true, type: String })
  password: string;
}

export const StartuperSchema = SchemaFactory.createForClass(Startuper);
