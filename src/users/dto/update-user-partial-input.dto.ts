import {PartialType} from "@nestjs/mapped-types";
import {CreateUserInputDto} from "./create-user-input.dto";

export class UpdateUserPartialInputDto extends PartialType(CreateUserInputDto) {
}