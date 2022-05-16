import * as MU from '@mui/material'
import React from 'react'
import { ShopLayout } from '../components/layouts'
import { ProductList } from '../components/products'
import { initialData } from '../database/products'

const HomePage = () => {
    return (
        <ShopLayout
            title="Teslo-Shop | Home"
            pageDescription="Encuentra los mejores productos de Teslo Aqui"
        >
            <MU.Typography variant="h1" component="h1">Tienda</MU.Typography>
            <MU.Typography variant="h2" sx={{ mb: 1 }}>Todos los productos</MU.Typography>

            <ProductList products={initialData.products as any} />

        </ShopLayout>
    )
}

export default HomePage