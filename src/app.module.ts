import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from './users.controller';
import { AppService } from './app.service';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
