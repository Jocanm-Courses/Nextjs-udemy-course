import { Typography, Grid, Card, CardContent, Divider, Box, Button, Link } from '@mui/material'
import React, { useMemo } from 'react'
import { CardList, OrderSummary } from '../../components/cart'
import { ShopLayout } from '../../components/layouts'
import NextLink from 'next/link';
import { useCartContext } from '../../context';
import { countries } from '../../helpers';

const SummaryPage = () => {

    const { shippingAddress, numberOfItems } = useCartContext()

    const countryName = useMemo(() => (
        countries.find(c => c.code === shippingAddress?.country)?.name
    ), [shippingAddress])

    if (!shippingAddress) {
        return <></>
    }

    const { name, lastname, city, phone, postalCode, direction, direction2 } = shippingAddress


    return (
        <ShopLayout
            title="Resumen de orden"
            pageDescription="Resumen de la orden"
        >
            <Typography variant="h1" component="h1">Resumen de la orden</Typography>

            <Grid container>

                <Grid item xs={12} sm={7}>
                    <CardList />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card className="summary-card">
                        <CardContent>
                            <Typography variant="h2">
                                Resumen ({numberOfItems} {numberOfItems > 1 ? 'productos' : 'producto'})
                            </Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box display="flex" justifyContent="end">
                                <NextLink href="/checkout/address" passHref>
                                    <Link underline="always">
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>

                            <Typography variant="subtitle1">Direccion de entrega</Typography>
                            <Typography>{name} {lastname}</Typography>
                            <Typography>{direction}{!!direction2 && `, ${direction2}`}</Typography>
                            <Typography>{city} {postalCode}</Typography>
                            <Typography>{countryName}</Typography>
                            <Typography>{phone}</Typography>

                            <Divider sx={{ my: 1 }} />

                            <Box display="flex" justifyContent="end">
                                <NextLink href="/cart" passHref>
                                    <Link underline="always">
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>

                            <OrderSummary />

                            <Box sx={{ mt: 3 }}>
                                <Button color="secondary" className="circular-btn" fullWidth>Confirmar orden</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </ShopLayout>
    )
}

export default SummaryPage