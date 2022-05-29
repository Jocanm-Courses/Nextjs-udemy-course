import React from 'react'
import * as M from '@mui/material';
import { AuthLayout } from '../../components/layouts/AuthLayout';
import NextLink from 'next/link';

const RegisterPage = () => {
    return (
        <AuthLayout title="Registrate">
            <M.Box sx={{ width: 350, p: "10px 20px" }}>
                <M.Grid container spacing={2}>
                    <M.Grid item xs={12}>
                        <M.Typography variant="h1" component="h1">Crea tu cuenta</M.Typography>
                    </M.Grid>
                    <M.Grid item xs={12}>
                        <M.TextField
                            label="Nombre"
                            variant="filled"
                            fullWidth
                        />
                    </M.Grid>
                    <M.Grid item xs={12}>
                        <M.TextField
                            label="Correo"
                            variant="filled"
                            fullWidth
                        />
                    </M.Grid>
                    <M.Grid item xs={12}>
                        <M.TextField
                            label="Contraseña"
                            variant="filled"
                            type="password"
                            fullWidth
                        />
                    </M.Grid>
                    <M.Grid item xs={12}>
                        <M.TextField
                            label="Confirmar contraseña"
                            variant="filled"
                            type="password"
                            fullWidth
                        />
                    </M.Grid>
                    <M.Grid item xs={12}>
                        <M.Button fullWidth color="secondary" className="circular-btn" size="large">
                            Ingresar
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
        </AuthLayout>
    )
}

export default RegisterPage