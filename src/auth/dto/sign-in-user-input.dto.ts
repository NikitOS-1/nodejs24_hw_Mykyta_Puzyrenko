import { ISignInUserInput } from '../interface/sign-in-user.interface';

export class SignInUserInputDto implements ISignInUserInput {
    firstName: string;
    password: string;
}