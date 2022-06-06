import { yupResolver } from '@hookform/resolvers/yup';
import * as M from '@mui/material';
import Cookies from 'js-cookie';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { ShopLayout } from '../../components/layouts';
import { MyTextField } from '../../components/ui';
import { countries, getAddresFromCookies, isValidToken } from '../../helpers';

const schema = Yup.object({
    name: Yup
        .string()
        .required('Name is required'),
    lastname: Yup
        .string()
        .required('Last name is required'),
    direction: Yup
        .string()
        .required('Direction is required'),
    direction2: Yup
        .string(),
    postalCode: Yup
        .string()
        .required('Postal code is required'),
    country: Yup
        .string()
        .required('Country is required'),
    city: Yup
        .string()
        .required('City is required'),
    phone: Yup
        .string()
        .required('Phone is required'),
})

export interface FormProps extends Yup.InferType<typeof schema> { }

const Address = () => {

    const router = useRouter()

    const methods = useForm<FormProps>({
        resolver: yupResolver(schema),
        defaultValues: {
            ...getAddresFromCookies(),
            country: '',
        }
    })

    const { handleSubmit } = methods

    const onSubmit = (data: FormProps) => {
        Cookies.set('address', JSON.stringify(data))
        router.push('/checkout/summary')
    }

    return (
        <ShopLayout title="Dirección" pageDescription='Confirmar dirección del destino'>

            <M.Typography variant="h1">
                Dirección
            </M.Typography>

            <FormProvider
                {...methods}
            >

                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <M.Grid container spacing={2}>
                        <M.Grid item xs={12} sm={6}>
                            <MyTextField name="name" label="Nombre" fullWidth variant='filled' />
                        </M.Grid>
                        <M.Grid item xs={12} sm={6}>
                            <MyTextField name="lastname" label="Apellido" fullWidth variant='filled' />
                        </M.Grid>
                        <M.Grid item xs={12} sm={6}>
                            <MyTextField name="direction" label="Dirección" fullWidth variant='filled' />
                        </M.Grid>
                        <M.Grid item xs={12} sm={6}>
                            <MyTextField name="direction2" label="Dirección 2" fullWidth variant='filled' />
                        </M.Grid>
                        <M.Grid item xs={12} sm={6}>
                            <MyTextField name="postalCode" label="Codigo Postal" fullWidth variant='filled' />
                        </M.Grid>
                        <M.Grid item xs={12} sm={6}>
                            <MyTextField name="city" label="Ciudad" fullWidth variant='filled' />
                        </M.Grid>

                        <M.Grid item xs={12} sm={6}>
                            <M.FormControl fullWidth>
                                <MyTextField
                                    select
                                    variant="filled"
                                    label="País"
                                    name="country"
                                >
                                    {
                                        countries.map(({ code, name }) => (
                                            <M.MenuItem key={code} value={code}>
                                                {name}
                                            </M.MenuItem>
                                        ))
                                    }
                                </MyTextField>
                            </M.FormControl>
                        </M.Grid>
                        <M.Grid item xs={12} sm={6}>
                            <MyTextField name="phone" label="Teléfono" variant='filled' fullWidth />
                        </M.Grid>
                    </M.Grid>

                    <M.Box sx={{ mt: 5 }} display="flex" justifyContent="center">
                        <M.Button color="secondary" className="circular-btn" size="large" type="submit">Revisar Pedido</M.Button>
                    </M.Box>
                </form>

            </FormProvider>

        </ShopLayout>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    const { token = "" } = req.cookies;

    let isValid = false;

    try {
        await isValidToken(token)
        isValid = true;
    } catch {
        isValid = false;
    }

    if (!isValid) {
        return {
            redirect: {
                destination: '/auth/login?p=/checkout/address',
                permanent: false
            }
        }
    }

    return {
        props: {

        }
    }
}

export default Address