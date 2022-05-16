import React, { FC } from 'react'
import { IProduct } from '../../interfaces/products';
import * as MU from '@mui/material';

interface Props {
    product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {
    return (
        <MU.Grid
            item
            key={product.slug}
            xs={6}
            sm={4}
        >
            <MU.Card>
                <MU.CardActionArea>
                    <MU.CardMedia
                        component="img"
                        image={`products/${product.images[0]}`}
                        alt={product.title}
                    />
                </MU.CardActionArea>
            </MU.Card>
        </MU.Grid>
    )
}
