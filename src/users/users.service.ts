import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {IUser} from "./interfaces/user.interface";
import {PartialUpdateUserDto} from "./dto/partial-update-user.dto";

@Injectable()
export class UsersService {
    private mockUsers: (IUser)[] = []
    private mockUuid: number = 1

    getUsers(): IUser[] {
        return this.mockUsers
    }

    getUserByID(id: number): IUser {
        const findUser = this.mockUsers.find((user: IUser) => user.id === id);
        if (!findUser) {
            throw new NotFoundException('User not found');
        }
        return findUser;
    }

    createUser(createUserDto: CreateUserDto): IUser {
        const newUser = {id: this.mockUuid++, ...createUserDto};
        this.mockUsers.push(newUser)
        return newUser
    }

    updateUser(id: number, updateUserDto: UpdateUserDto): IUser {
        const findUserIndex = this.mockUsers.findIndex((user: IUser) => user.id === id);
        if (findUserIndex === -1) {
            throw new NotFoundException('User not found');
        }
        const updateUser: IUser = {id, ...updateUserDto};
        this.mockUsers[findUserIndex] = updateUser;
        return updateUser;
    }

    updateUserPartially(id: number, partialUpdateUserDto: PartialUpdateUserDto): IUser {
        const findUserIndex = this.mockUsers.findIndex((user: IUser) => user.id === id);
        if (findUserIndex === -1) {
            throw new NotFoundException('User not found');
        }
        const updateUser: IUser = {...this.mockUsers[findUserIndex], ...partialUpdateUserDto};
        this.mockUsers[findUserIndex] = updateUser;
        return updateUser;
    }

    deleteUser(id: number): IUser[] {
        const findUserIndex = this.mockUsers.findIndex((user: IUser) => user.id === id);
        if (findUserIndex === -1) {
            throw new NotFoundException('User not found');
        }
        const deletedUser = this.mockUsers.splice(findUserIndex, 1);
        return deletedUser;
    }
}