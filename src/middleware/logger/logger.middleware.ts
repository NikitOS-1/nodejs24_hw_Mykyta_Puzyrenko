import {Injectable, NestMiddleware} from '@nestjs/common';
import {NextFunction, Request, Response} from 'express';

interface ILogger {
    IpAddress: string,
    date: string,
    userAgent: string
}

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const arrayLoggerRequest: ILogger[] = []

        const currentTime = new Date().toISOString();
        const ipAddress = req.ip;
        const userAgent = req.headers['user-agent'] || 'Unknown device';

        arrayLoggerRequest.push({
            date: currentTime,
            IpAddress: ipAddress,
            userAgent: userAgent
        });

        console.log(arrayLoggerRequest);
        next();
    }
}
