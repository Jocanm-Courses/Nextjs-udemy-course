import React from 'react';
import { IUser } from '../../interfaces';


interface ContextProps {
    isLoggedIn: boolean,
    user?: IUser

    loginUser: (userInfo: { email: string; password: string; }) => Promise<boolean>
    registerUser: (userInfo: {
        email: string; password: string; name: string;
    }) => Promise<{ hasError: boolean; message?: string; }>;
    logoutUser: () => void;
}

export const AuthContext = React.createContext<ContextProps>({} as ContextProps);

export const useAuthContext = () => React.useContext(AuthContext);