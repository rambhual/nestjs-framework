import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { ValidationPipe } from '../shared/validation.pipe';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('api/user')
  showAllUsers() {
    return this.userService.showAllUsers();
  }

  @Post('login')
  login(@Body() data: UserDto) {
    return this.userService.login(data);
  }

  @Post('register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: UserDto) {
    return this.userService.register(data);
  }
}
