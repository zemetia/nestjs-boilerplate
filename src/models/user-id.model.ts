import { v4 as uuidv4 } from 'uuid';

export class UserId {
  static generate(): string {
    return uuidv4();
  }
}
