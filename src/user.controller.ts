import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getAllUsers(req, res, next) {}

    @Get('/:id')
    getUser(req, res, next) {}

    @Post('')
    addUser(req, res, next) {}
}