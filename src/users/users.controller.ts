import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
    Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserInputDto } from './dto/create-user-input.dto';
import { UpdateUserInputDto } from './dto/update-user-input.dto';
import { UpdateUserPartialInputDto } from './dto/update-user-partial-input.dto';
import { IUser } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number): IUser {
        return this.usersService.findOneById(id);
    }

    @Get()
    listUsers(): IUser[] {
        return this.usersService.list();
    }

    @Post()
    createUser(@Body() dto: CreateUserInputDto): IUser {
        return this.usersService.create(dto);
    }

    @Patch(':id')
    updateUserPartially(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserPartialInputDto,
    ): IUser {
        return this.usersService.updatePartially(id, updateUserDto);
    }

    @Put(':id')
    updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserInputDto,
    ): IUser {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number): string {
        return this.usersService.remove(id);
    }
}