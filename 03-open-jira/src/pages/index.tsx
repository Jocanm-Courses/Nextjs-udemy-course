import { Typography } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'
import { Layout } from '../components/layouts'

const HomePage: NextPage = () => {
    return (
        <Layout> 
            <Typography variant='h1' color="primary">
                HomePage
            </Typography>
        </Layout>
    )
}

export default HomePage