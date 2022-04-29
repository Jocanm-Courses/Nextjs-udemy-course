import React from 'react'
import { MainLayout } from '../../components/layout/MainLayout'

const PricinPage = () => {
    return (
        <h1>PricinPage</h1>
    )
}

PricinPage.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default PricinPage