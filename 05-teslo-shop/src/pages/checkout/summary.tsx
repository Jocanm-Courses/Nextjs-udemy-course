import { Typography, Grid, Card, CardContent, Divider, Box, Button, Link } from '@mui/material'
import React from 'react'
import { CardList, OrderSummary } from '../../components/cart'
import { ShopLayout } from '../../components/layouts'
import NextLink from 'next/link';

const SummaryPage = () => {
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
                                Resumen (3 productos)
                            </Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box display="flex" justifyContent="end">
                                <NextLink href="/checkout/address" passHref>
                                    <Link underline="always">
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>

                            <Typography variant="subtitle1">Dirección de entrega</Typography>
                            <Typography>Jose Angarita</Typography>
                            <Typography>Algun lugar</Typography>
                            <Typography>Barranquilla calle 11 # 17 - 23</Typography>
                            <Typography>Colombia</Typography>
                            <Typography>30141611852</Typography>

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