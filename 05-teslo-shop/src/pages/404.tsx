import * as MU from '@mui/material'
import React from 'react'
import { ShopLayout } from '../components/layouts'

const NotFoundPage = () => {
    return (
        <ShopLayout title="Page not found" pageDescription='No hay nada aqui'>
            <MU.Box display="flex" justifyContent="center" alignItems="center" height="calc(100vh - 200px)" sx={{
                flexDirection: { xs: "column", sm: "row" },
            }}>

                <MU.Typography variant="h1" fontSize={80} fontWeight={200}>404 | </MU.Typography>
                <MU.Typography sx={{ ml: 2 }}>Pagina no encontrada </MU.Typography>

            </MU.Box>
        </ShopLayout>
    )
}

export default NotFoundPage