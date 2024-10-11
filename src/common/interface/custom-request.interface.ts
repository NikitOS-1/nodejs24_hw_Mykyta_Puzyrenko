import {Request} from 'express';

export interface CustomRequest extends Request {
    user: {
        sub: string;
        refreshToken?: string;
    };
}