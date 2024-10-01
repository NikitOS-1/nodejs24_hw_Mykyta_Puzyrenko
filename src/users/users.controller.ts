import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {IUser} from "./interfaces/user.interface";
import {PartialUpdateUserDto} from "./dto/partial-update-user.dto";


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    //GET 'http://localhost:3000/users
    @Get()
    getUsers(): IUser[] {
        return this.usersService.getUsers();
    }

    //GET 'http://localhost:3000/users/1
    @Get(':id')
    getUserByID(@Param('id', ParseIntPipe) id: number): IUser {
        return this.usersService.getUserByID(id);
    }

    //POST 'http://localhost:3000/users
    @Post()
    createUser(@Body() createUserDto: CreateUserDto): IUser {
        return this.usersService.createUser(createUserDto);
    }

    //PUT 'http://localhost:3000/users/1
    @Put(':id')
    updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto): IUser {
        return this.usersService.updateUser(id, updateUserDto);
    }

    //PATCH 'http://localhost:3000/users/1
    @Patch(':id')
    updateUserPartially(
        @Param('id', ParseIntPipe) id: number,
        @Body() partialUpdateUserDto: PartialUpdateUserDto): IUser {
        return this.usersService.updateUserPartially(id, partialUpdateUserDto);
    }

    //DELETE 'http://localhost:3000/users/1
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id);
    }
}
