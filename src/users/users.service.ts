import {Injectable, NotFoundException, UnprocessableEntityException,} from '@nestjs/common';
import {IUser} from './interfaces/user.interface';
import {ICreateUserInput} from './interfaces/create-user-input.interface';
import {IUpdateUserPartialInput} from './interfaces/update-user-partial-input.interface';
import {IUpdateUserInput} from './interfaces/update-user-input.interface';

let users = [];

@Injectable()
export class UsersService {
    findOneAndUpdate(id: number, updateBody: IUpdateUserPartialInput): IUser {
        const user = this.findOneById(id);
        return this.updatePartially(user.id, updateBody);
    }

    create(dto: ICreateUserInput): IUser {
        const newUser = {id: users.length + 1, ...dto};
        users.push(newUser);
        return newUser;
    }

    findOne(firstName: string): IUser {
        const user = users.find((user) => user.firstName === firstName);

        if (!user) {
            throw new NotFoundException(
                `User with first name ${firstName} not found`,
            );
        }
        return user;
    }

    list(): IUser[] {
        return users;
    }

    findOneWithoutExeption(firstName: string): IUser {
        return users.find((user) => user.firstName === firstName);
    }

    findOneById(id: number): IUser {
        const user = users.find((user) => user.id === id);
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return user;
    }

    updatePartially(id: number, dto: IUpdateUserPartialInput): IUser {
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex === -1) {
            throw new NotFoundException(`User with id ${id} not found`);
        }

        if (dto.hasOwnProperty('id')) {
            throw new UnprocessableEntityException(
                'Updating the "id" field is not allowed',
            );
        }

        const updatedUser = {...users[userIndex], ...dto};
        users[userIndex] = updatedUser;

        return updatedUser;
    }

    update(id: number, dto: IUpdateUserInput): IUser {
        const userIndex = users.findIndex((user) => user.id === id);
        const user = users[userIndex];

        if (userIndex === -1) {
            throw new NotFoundException(`User with id ${id} not found`);
        }

        if (dto.hasOwnProperty('id')) {
            throw new UnprocessableEntityException(
                'Updating the "id" field is not allowed',
            );
        }

        const updatedUser = {...user, ...dto};

        users[userIndex] = updatedUser;

        return users[userIndex] as IUser;
    }

    remove(id: number) {
        const user = users.find((user) => user.id === id);

        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }

        users = users.filter((user) => user.id !== id);

        return `User with ID ${id} removed successfully`;
    }
}