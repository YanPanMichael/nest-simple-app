import {
  Controller,
  Get,
  Post,
  Response,
  Param,
  Request,
  Body,
  HttpStatus,
  Header
} from '@nestjs/common';
import { UsersService } from 'src/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(@Response() res) {
    const users = await this.usersService.getAllUsers();
    res.status(HttpStatus.OK).json(users);
  }

  @Get(':id')
  async getUser(@Response() res, @Param('id') id) {
    const user = await this.usersService.getUser(+id);
    res.status(HttpStatus.OK).json(user);
  }

  @Post()
  @Header('Cache-Control', 'none')
  async addUser(@Response() res, @Body('user') user) {
    const msg = await this.usersService.addUser(user);
    res.status(HttpStatus.CREATED).json(msg);
  }
}
