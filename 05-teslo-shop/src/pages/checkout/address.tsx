import * as M from '@mui/material';
import React from 'react'
import { ShopLayout } from '../../components/layouts';

const address = () => {
    return (
        <ShopLayout title="Dirección" pageDescription='Confirmar dirección del destino'>

            <M.Typography variant="h1">
                Dirección
            </M.Typography>

            <M.Grid container spacing={2}>
                <M.Grid item xs={12} sm={6}>
                    <M.TextField label="Nombre" fullWidth variant='filled' />
                </M.Grid>
                <M.Grid item xs={12} sm={6}>
                    <M.TextField label="Apellido" fullWidth variant='filled' />
                </M.Grid>
                <M.Grid item xs={12} sm={6}>
                    <M.TextField label="Dirección" fullWidth variant='filled' />
                </M.Grid>
                <M.Grid item xs={12} sm={6}>
                    <M.TextField label="Dirección 2" fullWidth variant='filled' />
                </M.Grid>
                <M.Grid item xs={12} sm={6}>
                    <M.TextField label="Codigo Postal" fullWidth variant='filled' />
                </M.Grid>
                <M.Grid item xs={12} sm={6}>
                    <M.TextField label="Ciudad" fullWidth variant='filled' />
                </M.Grid>

                <M.Grid item xs={12} sm={6}>
                    <M.FormControl fullWidth>
                        <M.Select
                            variant="filled"
                            label="País"
                            value={1}
                        >
                            <M.MenuItem value={1}>Costa Rica</M.MenuItem>
                            <M.MenuItem value={2}>Colombia</M.MenuItem>
                            <M.MenuItem value={3}>Mexico</M.MenuItem>
                        </M.Select>
                    </M.FormControl>
                </M.Grid>
                <M.Grid item xs={12} sm={6}>
                    <M.TextField label="Teléfono" variant='filled' fullWidth />
                </M.Grid>
            </M.Grid>

            <M.Box sx={{ mt: 5 }} display="flex" justifyContent="center">
                <M.Button color="secondary" className="circular-btn" size="large">Revisar Pedido</M.Button>
            </M.Box>

        </ShopLayout>
    )
}

export default address