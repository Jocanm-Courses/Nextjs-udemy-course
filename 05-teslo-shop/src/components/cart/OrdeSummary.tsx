import React from 'react'
import { Grid, Typography } from '@mui/material';
import { useCartContext } from '../../context';
import { format } from '../../helpers';

export const OrderSummary = () => {

    const ctx = useCartContext()

    return (
        <Grid container>

            <Grid item xs={6}>
                <Typography>No. Productos</Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end">
                <Typography>
                    {ctx.numberOfItems} {ctx.numberOfItems > 1 ? 'Productos' : 'Producto'}
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>SubTotal</Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end">
                <Typography>{format(ctx.subTotal)}</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>Impuestos ({Number(process.env.NEXT_PUBLIC_TAX_RATE)*100}%)</Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end">
                <Typography>{format(ctx.tax)}</Typography>
            </Grid>

            <Grid item xs={6} sx={{ mt: 2 }}>
                <Typography variant='subtitle1'>Total: </Typography>
            </Grid>
            <Grid item xs={6} sx={{ mt: 2 }} display="flex" justifyContent="end">
                <Typography variant='subtitle1'>{format(ctx.total)}</Typography>
            </Grid>

        </Grid >
    )
}
