import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import { Layout } from '../../src/components/layout'
import Cookies from 'js-cookie'
import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'

interface Props {
    theme: string
}

const ThemeChangerPage: NextPage<Props> = ({ theme }) => {

    const [currentTheme, setCurrentTheme] = useState(theme)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTheme(event.target.value)
        Cookies.set("theme", event.target.value)
    }

    const onClick = async () => {

        const { data } = await axios.get('/api/hello')
        console.log(data)

    }

    return (
        <Layout>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Tema</FormLabel>
                        <RadioGroup
                            value={currentTheme}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="light" control={<Radio />} label="Light" />
                            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                            <FormControlLabel value="custom" control={<Radio />} label="Custom" />
                        </RadioGroup>
                    </FormControl>

                    <Button onClick={onClick}>
                        Save
                    </Button>

                </CardContent>
            </Card>
        </Layout>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    const { theme } = req.cookies

    const validThemes = ["light", "dark", "custom"]

    return {
        props: {
            theme: validThemes.includes(theme) ? theme : "dark"
        }
    }
}

export default ThemeChangerPage