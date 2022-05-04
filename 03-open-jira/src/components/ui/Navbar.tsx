import MenuOutLinedIcon from '@mui/icons-material/MenuOutlined'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Navbar = () => {
    return (
        <AppBar position='sticky' elevation={0}>
            <Toolbar>
                <IconButton>
                    <MenuOutLinedIcon />
                </IconButton>

                <Typography variant='h6'>
                    OpenJira
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
