import InboxIcon from '@mui/icons-material/InboxOutlined';
import MailIcon from '@mui/icons-material/MailOutline';
import { Drawer, Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import React from 'react'
import { useUiContext } from '../../context/ui';

const menuItems = [
    "Inbox", "Starred", "Sent Mail", "Drafts"
]

export const Sidebar = () => {

    const { sideOpen, closeSide } = useUiContext()

    return (

        <Drawer
            anchor='left'
            onClose={closeSide}
            open={sideOpen}
        >

            <Box sx={{ width: 250 }}>

                <Box sx={{ p: '5px 10px' }}>
                    <Typography variant="h4">Menú</Typography>
                </Box>

                <List>
                    {menuItems.map((text, index) => (
                        <ListItem button key={text}>
                            {
                                index % 2 ? <InboxIcon /> : <MailIcon />
                            }
                            <ListItemText
                                primary={text}
                                sx={{ marginLeft: '12px' }}
                            />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {menuItems.map((text, index) => (
                        <ListItem button key={text}>
                            {
                                index % 2 ? <InboxIcon /> : <MailIcon />
                            }
                            <ListItemText
                                sx={{ marginLeft: '12px' }}
                                primary={text}
                            />
                        </ListItem>
                    ))}
                </List>

            </Box>

        </Drawer>

    )
}
