import React, { useEffect } from 'react'
import { ShopLayout } from '../../components/layouts'
import { Card, CardContent, Divider, Grid, Typography, Box, Button } from '@mui/material';
import { CardList, OrderSummary } from '../../components/cart';
import { useCartContext } from '../../context';
import { useRouter } from 'next/router';

const CartPage = () => {

    const { isLoaded, cart } = useCartContext()
    const router = useRouter()

    const handleCheckout = () => {
        router.push('/checkout/address')
    }

    useEffect(() => {
        if (isLoaded && cart.length === 0) {
            router.replace('/cart/empty')
        }
    }, [isLoaded, cart, router])

    if(!isLoaded || cart.length === 0) return <></>;

    return (
        <ShopLayout
            title="Carrito - 3"
            pageDescription="Carrito de compras de la tienda"
        >
            <Typography variant="h1" component="h1">Carrito</Typography>

            <Grid container>

                <Grid item xs={12} sm={7}>
                    <CardList isEditable />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card className="summary-card">
                        <CardContent>
                            <Typography variant="h2">
                                Orden
                            </Typography>
                            <Divider sx={{ my: 1 }} />

                            <OrderSummary />

                            <Box sx={{ mt: 3 }} onClick={handleCheckout}>
                                <Button color="secondary" className="circular-btn" fullWidth>Checkout</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </ShopLayout>
    )
}

export default CartPage
