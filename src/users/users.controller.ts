import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model/user.model';

@Controller('api/v1')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add-user')
  async addUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('phone') phone: string,
  ): Promise<User> {
    console.log(`User Added: ${name}, ${email}, ${phone}`);
    return this.usersService.addUser(name, email, phone);
  }

  @Get('get-user/:id')
  async getUser(@Param('id') id: number): Promise<User> {
    return this.usersService.getUser(id);
  }
}
