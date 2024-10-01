import {IsBoolean, IsInt, IsNotEmpty, IsString} from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly firstName: string;

    @IsString()
    @IsNotEmpty()
    readonly lastName: string;

    @IsInt()
    readonly age: number;

    @IsBoolean()
    readonly isStudent: boolean;
}
