import {Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {IUser} from "./interfaces/user.interface";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //GET 'localhost:3000/users/list
  @Get('list')
  getUsers() {
    return this.usersService.getUsers();
  }

  //GET 'localhost:3000/users?id=1
  @Get(':id')
  getUserByID(@Param('id') id: string) {
    return this.usersService.getUserByID(id);
  }

  //POST 'localhost:3000/users
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  //PUT 'localhost:3000/users?id=1
  @Put()
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  //PATCH 'localhost:3000/users?id=1
  @Patch(':id')
  updateUserPartially(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUserPartially(id, updateUserDto);
  }

  //DELETE 'localhost:3000/users?id=1
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
