import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'
import { Layout } from '../components/layouts'
import { EntriesList, NewEntry } from '../components/ui'

const HomePage: NextPage = () => {
    return (
        <Layout title="Home | OpenJira">

            <Grid container spacing={2}>

                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: "calc(100vh - 100px)" }}>
                        <CardHeader title="Pendientes" />
                        <NewEntry/>
                        <EntriesList 
                            status="pending"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: "calc(100vh - 100px)" }}>
                        <CardHeader title="En Progreso" />
                        <EntriesList
                            status="inProgress"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: "calc(100vh - 100px)" }}>
                        <CardHeader title="Completadas " />
                        <EntriesList 
                            status="completed"
                        />
                    </Card>
                </Grid>

            </Grid>

        </Layout>
    )
}

export default HomePage