import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hi everyone! Here you can see CRUD for users';
  }
}
