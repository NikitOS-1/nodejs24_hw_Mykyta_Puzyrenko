import {IsBoolean, IsInt, IsNotEmpty, IsString} from "class-validator";

export class UpdateUserInputDto {
    @IsString()
    @IsNotEmpty()
    readonly firstName: string;

    @IsString()
    @IsNotEmpty()
    readonly lastName: string;

    @IsInt()
    @IsNotEmpty()
    readonly age: number;

    @IsBoolean()
    @IsNotEmpty()
    readonly isStudent: boolean;
}
