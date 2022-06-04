import React, { useEffect, useReducer } from 'react'
import { IUser } from '../../interfaces'
import { AuthContext, authReducer } from '.'
import { testloApi } from '../../api';
import Cookies from 'js-cookie';
import axios from 'axios';

export interface AuthState {
    isLoggedIn: boolean,
    user?: IUser
}

const CART_INIT_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [state, dispatch] = useReducer(authReducer, CART_INIT_STATE)

    useEffect(() => {
        refreshToken()
    }, [])

    const refreshToken = async () => {

        const token = Cookies.get('token')
        if (!token) return;

        try {
            const { data: { token, user } } = await testloApi.get('/user/validate')
            Cookies.set('token', token)
            dispatch({ type: 'Login', payload: user })

        } catch (error) {
            Cookies.remove('token')
            dispatch({ type: 'Logout' })
        }
    }

    const loginUser = async (userInfo: { email: string, password: string }) => {

        try {
            const { data } = await testloApi.post('/user/login', userInfo)
            const { token, user } = data as { token: string, user: IUser }
            Cookies.set('token', token)
            dispatch({ type: 'Login', payload: user })
            return true
        } catch (error) {
            return false
        }

    }

    const registerUser = async (userInfo: { email: string, password: string, name: string }): Promise<{
        hasError: boolean,
        message?: string
    }> => {

        try {
            const { data } = await testloApi.post('/user/register', userInfo)
            const { token, user } = data as { token: string, user: IUser }
            Cookies.set('token', token)
            dispatch({ type: 'Login', payload: user })
            return {
                hasError: false,
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: (error.response as any)?.data.message
                }
            } else {
                return {
                    hasError: true,
                    message: 'Error al registrar usuario'
                }
            }
        }


    }

    // const value = 

    return (
        <AuthContext.Provider value={{
            ...state,

            loginUser,
            registerUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}
