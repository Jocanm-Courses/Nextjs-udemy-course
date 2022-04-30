import { Button, Card, Grid, Row, Text } from '@nextui-org/react'
import { MainLayout } from '../components/layouts';
import { NextPage, GetStaticProps } from 'next';
import { pokeApi } from '../apis/pokeApi';
import { PokemonListProps } from '../types/interfaces';
import { SmallPokemon } from '../types/interfaces/pokemonList';
import { PokemonList } from '../components/pokemon';

interface CompProps {
    pokemons: SmallPokemon[]
}

const HomePage: NextPage<CompProps> = ({ pokemons }) => {

    return (
        <MainLayout
            title="Pokemon App"
        >
            <PokemonList pokemons={pokemons} />
        </MainLayout>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const { data } = await pokeApi.get<PokemonListProps>("/pokemon", { params: { limit: 151 } });

    const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
        ...pokemon,
        id: String(i + 1),
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
    }))

    return {
        props: {
            pokemons
        }
    }
}

export default HomePage