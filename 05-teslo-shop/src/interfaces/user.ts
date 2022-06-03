type UserRolteType = 'admin' | 'client';

export interface IUser {
    id:        string;
    name:      string;
    email:     string;
    role:      UserRolteType;
    createdAt: string;
    updatedAt: string;
}