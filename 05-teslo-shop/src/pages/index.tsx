import { Typography } from '@mui/material'
import React from 'react'
import { ShopLayout } from '../components/layouts'

const HomePage = () => {
    return (
        <ShopLayout
            title="Teslo-Shop | Home"
            pageDescription="Encuentra los mejores productos de Teslo Aqui"
        >
            <Typography variant="h1" component="h1">Tienda</Typography>
            <Typography variant="h2" sx={{ mb: 1 }}>Todos los productos</Typography>
        </ShopLayout>
    )
}

export default HomePage