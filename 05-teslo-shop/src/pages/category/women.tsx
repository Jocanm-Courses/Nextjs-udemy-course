import * as MU from '@mui/material'
import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products'
import { FullScreenLoading } from '../../components/ui'
import { useProducts } from '../../hooks'

const WomenPage = () => {

    const { products, isLoading } = useProducts('/products?gender=women')

    return (
        <ShopLayout
            title="Teslo-Shop | Women"
            pageDescription="Encuentra los mejores productos de Teslo para mujeres Aqui"
        >
            <MU.Typography variant="h1" component="h1">Mujeres</MU.Typography>
            <MU.Typography variant="h2" sx={{ mb: 1 }}>Productos para ellas</MU.Typography>

            {
                isLoading 
                    ? <FullScreenLoading/>
                    : <ProductList products={products} />
            }

        </ShopLayout>
    )
}

export default WomenPage