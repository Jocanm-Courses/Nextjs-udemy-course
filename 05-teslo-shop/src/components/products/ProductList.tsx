import * as MU from '@mui/material'
import React, { FC } from 'react'
import { IProduct } from '../../interfaces';
import { ProductCard } from './ProductCard';

interface Props {
    products: IProduct[]
}

export const ProductList: FC<Props> = ({ products }) => {
    return (
        <MU.Grid container spacing={4}>
            {
                products.map(product => (
                    <ProductCard key={product.slug} product={product} />
                ))
            }
        </MU.Grid>
    )
}
