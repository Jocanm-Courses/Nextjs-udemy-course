import MenuOutLinedIcon from '@mui/icons-material/MenuOutlined'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useUiContext } from '../../context/ui'
import { useRouter } from 'next/router';

export const Navbar = () => {

    const { openSide } = useUiContext()

    const { push } = useRouter()

    const goHome = () => {
        push('/')
    }

    return (
        <AppBar position='sticky' elevation={0}>
            <Toolbar>
                <IconButton onClick={openSide}>
                    <MenuOutLinedIcon />
                </IconButton>

                <Typography
                    sx={{cursor: 'pointer'}}
                    variant='h6'
                    onClick={goHome}
                >
                    OpenJira
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
