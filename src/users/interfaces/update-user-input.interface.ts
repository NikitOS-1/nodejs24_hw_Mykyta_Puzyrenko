import { IUser } from './user.interface';

export type IUpdateUserInput = Partial<Omit<IUser, 'id'>>;