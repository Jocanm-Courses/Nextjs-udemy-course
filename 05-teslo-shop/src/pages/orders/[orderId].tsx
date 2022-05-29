import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';
import { Typography, Grid, Card, CardContent, Divider, Box, Button, Link, Chip } from '@mui/material';
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { CardList, OrderSummary } from '../../components/cart'
import { ShopLayout } from '../../components/layouts'

const OrderPage = () => {

    const { orderId } = useRouter().query

    return (
        <ShopLayout
            title={`Resumen de la orden ${orderId}`}
            pageDescription="Resumen de la orden"
        >
            <Typography variant="h1" component="h1">Ordern ABC123</Typography>

            {/* <Chip
                sx={{my:2}}
                label="Pediente de pago"
                variant="outlined"
                color="error"
                icon={<CreditCardOffOutlined/>}
            /> */}
            <Chip
                sx={{ my: 2 }}
                label="Orden ya fue pagada"
                variant="outlined"
                color="success"
                icon={<CreditScoreOutlined />}
            />

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
                                <h1>Pagar</h1>
                            </Box>
                            <Chip
                                sx={{ my: 2 }}
                                label="Orden ya fue pagada"
                                variant="outlined"
                                color="success"
                                icon={<CreditScoreOutlined />}
                            />
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </ShopLayout>
    )
}

export default OrderPage