import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const NavBar = () => {

    const { theme } = useTheme()

    return (
        <nav
            style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px 0 0',
                background: theme?.colors.gray900.value
            }}
        >

            <Link href="/" passHref>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer'
                    }}
                >
                    <Image
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"

                        alt="App Icon"
                        width={100}
                        height={100}
                    />

                    <Text h2>P</Text>
                    <Text h3>okémon</Text>
                </div>
            </Link>


            <Text h3>Favoritos</Text>
        </nav>
    )
}
