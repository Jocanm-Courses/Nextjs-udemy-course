import React, { FC } from 'react'
import { initialData } from '../../database/products';
import { Typography, Grid, Link, CardActionArea, CardMedia, Box, Button } from '@mui/material';
import NextLink from 'next/link';
import { ItemCounter } from '../ui';
import { useCartContext } from '../../context';
import { ICartProduct } from '../../interfaces';

interface Props {
    isEditable?: boolean
}

export const CardList: FC<Props> = ({ isEditable }) => {

    const { cart, updateCartQuantity } = useCartContext()

    const onNewCartQuantity = (product: ICartProduct, newQuantity: number) => {
        product.quantity = newQuantity;
        updateCartQuantity(product)
    }

    return (
        <>
            {
                cart.map((product) => ((
                    <Grid container spacing={2} sx={{ mb: 1 }} key={product.slug + product.size}>
                        <Grid item xs={3}>
                            <NextLink href={`/products/${product.slug}`} passHref>
                                <Link>
                                    <CardActionArea>
                                        <CardMedia
                                            image={`/products/${product.image}`}
                                            component="img"
                                            sx={{ borderRadius: "5px" }}
                                        />
                                    </CardActionArea>
                                </Link>
                            </NextLink>
                        </Grid>
                        <Grid item xs={7}>
                            <Box display="flex" flexDirection="column">
                                <Typography variant="body1">{product.title}</Typography>
                                <Typography variant="body1">Talla {product.size}</Typography>

                                {
                                    isEditable
                                        ? <ItemCounter
                                            currentValue={product.quantity}
                                            maxValue={10}
                                            updatedQuantity={(value) => { onNewCartQuantity(product, value) }}
                                        />
                                        : <Typography variant="h5">
                                            {product.quantity} {product.quantity > 1 ? 'Productos' : 'Producto'}
                                        </Typography>
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={2} display="flex" alignItems="center" flexDirection="column">
                            <Typography variant="subtitle1">{`$${product.price}`}</Typography>

                            {
                                isEditable && <Button variant="text" color="secondary">Remover</Button>
                            }
                        </Grid>
                    </Grid>
                )))
            }
        </>
    )
}
