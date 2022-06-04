import React, { useState } from 'react'
import * as M from '@mui/material';
import { AuthLayout } from '../../components/layouts/AuthLayout';
import NextLink from 'next/link';
import * as Yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MyTextField } from '../../components/ui';
import { ErrorOutline } from '@mui/icons-material';
import { testloApi } from '../../api';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../context';

const registerFormShape = Yup.object({
    name: Yup
        .string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters'),
    email: Yup
        .string()
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email address')
        .required('Email is required'),
    password: Yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
    confirmPassword: Yup
        .string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

interface FormData extends Yup.InferType<typeof registerFormShape> { }

const RegisterPage = () => {

    const router = useRouter()
    const { registerUser } = useAuthContext()
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("second")
    const methods = useForm<FormData>({
        resolver: yupResolver(registerFormShape)
    })

    const onRegister = async ({ confirmPassword, ...rest }: FormData) => {

        setShowError(false)
        const { hasError, message } = await registerUser(rest)

        if (hasError) {
            setShowError(true)
            setErrorMessage(message!)
            return;
        }

        router.replace('/')

    }

    return (
        <AuthLayout title="Registrate">
            <FormProvider
                {...methods}
            >
                <form
                    onSubmit={methods.handleSubmit(onRegister)}
                >
                    <M.Box sx={{ width: 350, p: "10px 20px" }}>
                        <M.Grid container spacing={2}>
                            <M.Grid item xs={12}>
                                <M.Typography variant="h1" component="h1">Crea tu cuenta</M.Typography>
                                <M.Chip
                                    label={errorMessage}
                                    color="error"
                                    className="fadeIn"
                                    icon={<ErrorOutline />}
                                    sx={{ display: showError ? 'flex' : 'none' }}
                                />
                            </M.Grid>
                            <M.Grid item xs={12}>
                                <MyTextField name="name" label="Nombre" fullWidth />
                            </M.Grid>
                            <M.Grid item xs={12}>
                                <MyTextField name="email" label="Correo" fullWidth />
                            </M.Grid>
                            <M.Grid item xs={12}>
                                <MyTextField name="password" label="Contraseña" fullWidth type="password" />
                            </M.Grid>
                            <M.Grid item xs={12}>
                                <MyTextField name="confirmPassword" label="Confirmar contraseña" fullWidth type="password" />
                            </M.Grid>
                            <M.Grid item xs={12}>
                                <M.Button fullWidth color="secondary" className="circular-btn" size="large" type="submit">
                                    Crear
                                </M.Button>
                            </M.Grid>
                            <M.Grid item xs={12}>
                                <NextLink href="/auth/login" passHref>
                                    <M.Link>
                                        Inicia sesión
                                    </M.Link>
                                </NextLink>
                            </M.Grid>
                        </M.Grid>
                    </M.Box>
                </form>
            </FormProvider>
        </AuthLayout>
    )
}

export default RegisterPage