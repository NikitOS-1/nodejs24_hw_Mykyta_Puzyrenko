import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {IUser} from "./interfaces/user.interface";

@Injectable()
export class UsersService {

    getUsers(): IUser[] {
        return [
            {
                id: "1",
                firstName: "Nikita",
                lastName: "Nik",
                age: 30,
                isStudent: true
            },
            {
                id: "2",
                firstName: "Ggr",
                lastName: "XD",
                age: 20,
                isStudent: false
            }
        ];
    }

    getUserByID(id: string) {
        return `This action returns a #${id} user`;
    }

    createUser(createUserDto: CreateUserDto) {
        return 'This action adds a new user';
    }

    updateUser(id: string, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    updateUserPartially(id: string, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    deleteUser(id: string) {
        return `This action removes a #${id} user`;
    }
}
