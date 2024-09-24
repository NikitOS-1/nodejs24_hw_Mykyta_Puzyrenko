import {Injectable, NestMiddleware} from '@nestjs/common';
import {NextFunction, Request, Response} from 'express';


@Injectable()
export class LoggerIpMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const ipAddress = req.ip;

        console.log(`ipAddress: ${ipAddress}`);
        next();
    }
}
