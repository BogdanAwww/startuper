import { Role } from './../enums/role.enum';
import { IsEmail, IsEnum, IsString, Length, Max, Min } from 'class-validator';

export class userDto {
  readonly username: string;
  readonly surname: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @Length(8, 20)
  readonly password: string;

  @IsEnum(Role)
  readonly role: Role;
}
