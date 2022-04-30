import { GetStaticPaths, NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { pokeApi } from '../../apis';
import { MainLayout } from '../../components/layouts';
import { PokemonListProps } from '../../types/interfaces';
import { PokemonDetailProps } from '../../types/interfaces/pokemonDetailsInterface';

interface Props {
    pokemon: PokemonDetailProps
}

const PokemonInfo: NextPage<Props> = ({ pokemon }) => {

    return (
        <MainLayout>
            <h1>
                {pokemon.name}
            </h1>
        </MainLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const paths = [...Array(151)].map((_, index) => (
        {
            params: {
                pokemonId: `${index + 1}`,
            }
        }
    ));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { pokemonId } = params as { pokemonId: string }

    const { data: pokemon } = await pokeApi.get<PokemonDetailProps>(`/pokemon/${pokemonId}`)

    return {
        props: {
            pokemon
        }
    }

}

export default PokemonInfo