import { Role } from './role';

export class User {
// tslint:disable-next-line: variable-name
    _id: string;
    email: string;
    username: string;
    // password: string;
// tslint:disable-next-line: variable-name
    first_name: string;
// tslint:disable-next-line: variable-name
    last_name: string;
    roles: Role[];
    token?: string;
    expires?: string;
    // tslint:disable-next-line:variable-name
    is_banned?: boolean;
}
