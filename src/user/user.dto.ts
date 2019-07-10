import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

// tslint:disable-next-line: max-classes-per-file
export class UserRO {
  username: string;
  created: Date;
  password: string;
  token?: string;
}
