import * as MU from '@mui/material'
import React from 'react'
import NextLink from 'next/link'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

export const Navbar = () => {
    return (
        <nav>

            <MU.AppBar>
                <MU.Toolbar>

                    <NextLink href="/" passHref>
                        <MU.Link display="flex" alignItems="center" gap={0.5}>
                            <MU.Typography variant="h6">Teslo |</MU.Typography>
                            <MU.Typography>Shop</MU.Typography>
                        </MU.Link>
                    </NextLink>

                    <MU.Box flex={1} />

                    <MU.Box sx={{
                        display: { xs: "none", sm: "block" },
                    }}>

                        <NextLink href="/category/men" passHref>
                            <MU.Link>
                                <MU.Button>
                                    Hombres
                                </MU.Button>
                            </MU.Link>
                        </NextLink>
                        <NextLink href="/category/women" passHref>
                            <MU.Link>
                                <MU.Button>
                                    Mujeres
                                </MU.Button>
                            </MU.Link>
                        </NextLink>
                        <NextLink href="/category/kid" passHref>
                            <MU.Link>
                                <MU.Button>
                                    Niños
                                </MU.Button>
                            </MU.Link>
                        </NextLink>

                    </MU.Box>
                    <MU.Box flex={1} />

                    <MU.IconButton>
                        <SearchOutlined />
                    </MU.IconButton>

                    <NextLink href="/cart" passHref>
                        <MU.Link>
                            <MU.IconButton>
                                <MU.Badge badgeContent={2} color="secondary">
                                    <ShoppingCartOutlined />
                                </MU.Badge>
                            </MU.IconButton>
                        </MU.Link>
                    </NextLink>

                    <MU.Button>
                        Menú
                    </MU.Button>

                </MU.Toolbar>
            </MU.AppBar>

        </nav>
    )
}
