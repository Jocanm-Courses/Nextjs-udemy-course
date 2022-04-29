import React from 'react'
import { DarkLayout } from '../../components/layout/DarkLayout'
import { MainLayout } from '../../components/layout/MainLayout'

const About = () => {
    return (
        <h1>Pagina de About</h1>
    )
}

export default About

About.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}