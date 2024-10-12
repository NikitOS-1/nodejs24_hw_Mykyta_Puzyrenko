import { IsBoolean, IsInt, IsString } from 'class-validator';
import { ICreateUserInput } from '../interfaces/create-user-input.interface';

export class CreateUserInputDto implements ICreateUserInput {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsInt()
    age: number;

    @IsBoolean()
    isStudent: boolean;

    @IsString()
    password: string;
}