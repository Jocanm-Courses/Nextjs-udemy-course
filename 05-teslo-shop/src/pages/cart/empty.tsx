import React from 'react'
import { ShopLayout } from '../../components/layouts'
import * as MU from '@mui/material';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import NextLink from 'next/link';

const EmptyPage = () => {
    return (
        <ShopLayout
            title="Carrito vacío"
            pageDescription="No hay articulos en el carrito"
        >
            <MU.Box display="flex" justifyContent="center" alignItems="center" height="calc(100vh - 200px)" sx={{
                flexDirection: { xs: "column", sm: "row" },
            }}>

                <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />

                <MU.Box display="flex" flexDirection="column" alignItems="center">
                    <MU.Typography>Su carrito está vacio</MU.Typography>
                    <NextLink href="/" passHref>
                        <MU.Link typography="h4" color="secondary">
                            Regresar
                        </MU.Link>
                    </NextLink>
                </MU.Box>

            </MU.Box>
        </ShopLayout>
    )
}

export default EmptyPage