import { Body, Controller, Post } from '@nestjs/common';
import { createUserDto } from './Dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: createUserDto) {
    console.log(body);
    this.userService.create(body.email, body.password);
  }
}
