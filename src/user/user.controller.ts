import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

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
  register(@Body() data: UserDto) {
    return this.userService.register(data);
  }
}
