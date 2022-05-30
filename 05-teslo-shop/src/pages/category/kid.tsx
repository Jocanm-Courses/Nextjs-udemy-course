import * as MU from '@mui/material'
import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products'
import { FullScreenLoading } from '../../components/ui'
import { useProducts } from '../../hooks'
import { IProduct } from '../../interfaces'

const KidsPage = () => {

    const { products = [], isLoading } = useProducts<IProduct[]>('/products?gender=kid')

    return (
        <ShopLayout
            title="Teslo-Shop | Kids"
            pageDescription="Encuentra los mejores productos de Teslo para niños Aqui"
        >
            <MU.Typography variant="h1" component="h1">Niños</MU.Typography>
            <MU.Typography variant="h2" sx={{ mb: 1 }}>Productos para ellos</MU.Typography>

            {
                isLoading 
                    ? <FullScreenLoading/>
                    : <ProductList products={products} />
            }

        </ShopLayout>
    )
}

export default KidsPage