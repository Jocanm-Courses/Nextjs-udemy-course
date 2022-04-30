import React, { FC } from 'react'
import { SmallPokemon } from '../../types/interfaces'
import { Grid } from '@nextui-org/react';
import { PokemonCard } from './';

interface Props {
    pokemons: SmallPokemon[]
}

export const PokemonList: FC<Props> = ({ pokemons }) => {
    return (
        <Grid.Container
            gap={2} justify="flex-start" css={{ mt: "20px" }}
        >
            {
                pokemons.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
                ))
            }
        </Grid.Container>
    )
}
