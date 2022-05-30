import * as MU from '@mui/material'
import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products'
import { FullScreenLoading } from '../../components/ui'
import { useProducts } from '../../hooks'

const MenPage = () => {

    const { products, isLoading } = useProducts('/products?gender=men')

    return (
        <ShopLayout
            title="Teslo-Shop | Men"
            pageDescription="Encuentra los mejores productos de Teslo para hombres Aqui"
        >
            <MU.Typography variant="h1" component="h1">Hombres</MU.Typography>
            <MU.Typography variant="h2" sx={{ mb: 1 }}>Productos para ellos</MU.Typography>

            {
                isLoading 
                    ? <FullScreenLoading/>
                    : <ProductList products={products} />
            }

        </ShopLayout>
    )
}

export default MenPage