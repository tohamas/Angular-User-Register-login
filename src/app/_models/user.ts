import { Role } from "./role";

export class User {
    id?: string;
    username?: string;
    password?: string;
    passwordAgain?: string;
    email?: string;
    role?: Role;
    token?: string;
}