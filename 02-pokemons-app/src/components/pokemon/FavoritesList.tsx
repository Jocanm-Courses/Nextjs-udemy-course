import { Grid, Card } from '@nextui-org/react';
import React, { FC } from 'react'
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface Props {
    favorites: number[]
}

export const FavoritesList: FC<Props> = ({ favorites }) => {
    return (
        <Grid.Container
            gap={2}
            direction="row"
            justify='flex-start'
        >

            {
                favorites.map(pokemon => (
                    <FavoriteCardPokemon
                        key={pokemon}
                        pokemon={pokemon}
                    />
                ))
            }

        </Grid.Container>
    )
}
