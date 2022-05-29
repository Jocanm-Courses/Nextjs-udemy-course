import React from 'react'
import { ShopLayout } from '../../components/layouts'
import * as M from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import NextLink from 'next/link';

const columns: GridColDef[] = [
    { field: 'id', headerName: "id", width: 100 },
    { field: 'fullname', headerName: "Nombre Completo", width: 300, sortable: false },
    {
        field: 'paid',
        headerName: "Pagada",
        description: "Muestra si la orden fue pagada",
        width: 200,
        renderCell: (data) => (
            data.row.paid
                ? <M.Chip label="Pagada" color="success" variant="outlined" />
                : <M.Chip label="Pendiente" color="error" variant="outlined" />
        )
    },
    {
        field: 'orden',
        headerName: "Ver Orden",
        width: 200,
        sortable: false,
        renderCell: (data) => (
            <NextLink href={`/orders/${data.row.id}`} passHref>
                <M.Link underline='always'>
                    Ver Orden
                </M.Link>
            </NextLink>
        )
    },
]

const rows = [
    { id: 1, paid: false, fullname: "Juan Perez" },
    { id: 2, paid: true, fullname: "Jose Angarita" },
    { id: 3, paid: false, fullname: "David Perez" },
    { id: 4, paid: false, fullname: "Jorge Sarmiento" },
]

const HistoricOrdersPage = () => {
    return (
        <ShopLayout
            title="Historial de ordenes"
            pageDescription="Historial de ordenes del cliente"
        >
            <M.Typography variant="h1" component="h1">
                Historial de ordenes
            </M.Typography>

            <M.Grid container>
                <M.Grid item xs={12} sx={{ height: 650, width: "100%" }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    />
                </M.Grid>
            </M.Grid>
        </ShopLayout>
    )
}

export default HistoricOrdersPage