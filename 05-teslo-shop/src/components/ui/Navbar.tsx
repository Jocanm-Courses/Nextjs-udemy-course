import * as MU from '@mui/material'
import React, { useState } from 'react'
import NextLink from 'next/link'
import { ClearOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { useRouter } from 'next/router';
import { useUiContext } from '../../context';

export const Navbar = () => {

    const [seachedTerm, setSeachedTerm] = useState("")
    const [isSearchedVisible, setIsSearchedVisible] = useState(false)

    const { asPath } = useRouter()
    const { toogleMenu } = useUiContext()
    const { push } = useRouter()

    const onSearchedTerm = () => {
        if (!seachedTerm) return;
        push(`/search/${seachedTerm}`)
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSearchedTerm()
        }
    }

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
                        display: isSearchedVisible ? "none" : { xs: "none", sm: "block" },
                    }}
                        className="fadeIn"
                    >

                        <NextLink href="/category/men" passHref>
                            <MU.Link>
                                <MU.Button color={asPath === "/category/men" ? "primary" : "info"}>
                                    Hombres
                                </MU.Button>
                            </MU.Link>
                        </NextLink>
                        <NextLink href="/category/women" passHref>
                            <MU.Link>
                                <MU.Button color={asPath === "/category/women" ? "primary" : "info"}>
                                    Mujeres
                                </MU.Button>
                            </MU.Link>
                        </NextLink>
                        <NextLink href="/category/kid" passHref>
                            <MU.Link>
                                <MU.Button color={asPath === "/category/kid" ? "primary" : "info"}>
                                    Niños
                                </MU.Button>
                            </MU.Link>
                        </NextLink>

                    </MU.Box>
                    <MU.Box flex={1} />

                    {
                        isSearchedVisible ?
                            (
                                <MU.Input
                                    sx={{ display: { xs: "none", sm: "flex" } }}
                                    className='fadeIn'
                                    autoFocus
                                    value={seachedTerm}
                                    onChange={(e) => setSeachedTerm(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    type='text'
                                    placeholder="Buscar..."
                                    endAdornment={
                                        <MU.InputAdornment position="end">
                                            <MU.IconButton
                                                onClick={() => setIsSearchedVisible(false)}
                                            >
                                                <ClearOutlined />
                                            </MU.IconButton>
                                        </MU.InputAdornment>
                                    }
                                />
                            ) :
                            (
                                <MU.IconButton
                                    sx={{
                                        display:{ xs: "flex", sm: "none" },
                                    }}
                                    className='fadeIn'
                                    onClick={() => setIsSearchedVisible(true)}
                                >
                                    <SearchOutlined />
                                </MU.IconButton>
                            )
                    }


                    <MU.IconButton
                        sx={{
                            display: isSearchedVisible ? "none" : { xs: "none", sm: "block" },
                        }}
                        onClick={toogleMenu}
                    >
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

                    <MU.Button onClick={toogleMenu}>
                        Menú
                    </MU.Button>

                </MU.Toolbar>
            </MU.AppBar>

        </nav>
    )
}
