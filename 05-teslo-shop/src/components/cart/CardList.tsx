import React, { FC } from 'react'
import { initialData } from '../../database/products';
import { Typography, Grid, Link, CardActionArea, CardMedia, Box, Button } from '@mui/material';
import NextLink from 'next/link';
import { ItemCounter } from '../ui';

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

interface Props {
    isEditable?: boolean
}

export const CardList: FC<Props> = ({ isEditable }) => {
    return (
        <>
            {
                productsInCart.map((product) => ((
                    <Grid container spacing={2} sx={{ mb: 1 }} key={product.slug}>
                        <Grid item xs={3}>
                            <NextLink href={`/products/${product.slug}`} passHref>
                                <Link>
                                    <CardActionArea>
                                        <CardMedia
                                            image={`/products/${product.images[0]}`}
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
                                <Typography variant="body1">Talla M</Typography>

                                {
                                    isEditable
                                        ? <ItemCounter />
                                        : <Typography variant="h5">3 items</Typography>
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