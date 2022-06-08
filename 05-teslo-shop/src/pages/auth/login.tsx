import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorOutline } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import * as M from '@mui/material';
import { GetServerSideProps } from 'next';
import { getProviders, getSession, signIn } from 'next-auth/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { AuthLayout } from '../../components/layouts/AuthLayout';
import { MyTextField } from '../../components/ui';
import { useAuthContext } from '../../context';

interface SignInRes {
    error: string
    ok: boolean
    status: number
    url: string | null
}

const loginFormShape = Yup.object({
    email: Yup
        .string()
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email address')
        .required('Email is required'),
    password: Yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long')
})

interface FormData extends Yup.InferType<typeof loginFormShape> { }

const LoginPage = () => {

    const [showError, setShowError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [providers, setProviders] = useState<any>({})
    const { loginUser } = useAuthContext()
    const router = useRouter()
    const destination = router.query.p?.toString() || '/'

    const methods = useForm<FormData>({
        resolver: yupResolver(loginFormShape)
    })

    const handleLogin = async ({ email, password }: FormData) => {
        setIsLoading(true)
        //@ts-ignore
        const { ok }: SignInRes = await signIn('credentials', {
            email, password,
            redirect: false
        })
        setIsLoading(false)

        if (!ok) {
            setShowError(true)
            return;
        }

        router.push(destination)

    }

    const loginWithGithub = async () => {
        signIn('github', {
            callbackUrl: destination,
        })
    }

    useEffect(() => {
        getProviders().then(prov => {
            setProviders(prov)
        })
    }, [])

    return (
        <AuthLayout title="Ingresar">
            <FormProvider
                {...methods}
            >
                <form onSubmit={methods.handleSubmit(handleLogin)}>
                    <M.Box sx={{ width: 350, p: "10px 20px" }}>
                        <M.Grid container spacing={2}>
                            <M.Grid item xs={12}>
                                <M.Typography variant="h1" component="h1">Iniciar sesión</M.Typography>
                                {
                                    showError && (
                                        <M.Chip
                                            label="Usuario o contraseña incorrectos"
                                            color="error"
                                            className="fadeIn"
                                            icon={<ErrorOutline />}
                                            sx={{mx:"auto"}}
                                        />
                                    )
                                }
                            </M.Grid>
                            <M.Grid item xs={12}>
                                <MyTextField name="email" label="Correo" fullWidth />
                            </M.Grid>
                            <M.Grid item xs={12}>
                                <MyTextField name="password" label="Contraseña" fullWidth type="password" />
                            </M.Grid>
                            <M.Grid item xs={12}>
                                <M.Button fullWidth color="secondary" className="circular-btn" size="large" type="submit">
                                    {
                                        isLoading
                                            ? "Cargando.."
                                            : "Ingresar"
                                    }
                                </M.Button>
                            </M.Grid>

                            <M.Grid item xs={12}>
                                <NextLink href={destination ? `/auth/register?p=${destination}` : '/auth/register'} passHref>
                                    <M.Link>
                                        Registrate
                                    </M.Link>
                                </NextLink>
                            </M.Grid>

                            <M.Grid item xs={12}>
                                <M.Divider sx={{ width: "100%", mb: 2 }} />
                                <M.Button variant="outlined" fullWidth color="primary" onClick={loginWithGithub}>
                                    {<GitHubIcon />}
                                </M.Button>
                            </M.Grid>

                        </M.Grid>
                    </M.Box>
                </form>
            </FormProvider>
        </AuthLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {

    const session = await getSession({ req })

    const { q = "/" } = query

    if (session) {
        return {
            redirect: {
                destination: q.toString(),
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

export default LoginPage