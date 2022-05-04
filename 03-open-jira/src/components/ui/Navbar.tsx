import MenuOutLinedIcon from '@mui/icons-material/MenuOutlined'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useUiContext } from '../../context/ui'

export const Navbar = () => {

    const { openSide } = useUiContext()

    return (
        <AppBar position='sticky' elevation={0}>
            <Toolbar>
                <IconButton onClick={openSide}>
                    <MenuOutLinedIcon />
                </IconButton>

                <Typography variant='h6'>
                    OpenJira
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
