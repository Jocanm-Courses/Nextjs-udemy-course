import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC, useState } from 'react';
import { pokeApi } from '../../apis/pokeApi';
import { MainLayout } from '../../components/layouts';
import { PokemonDetailProps } from '../../types/interfaces/pokemonDetailsInterface';
import { PokemonListProps } from '../../types/interfaces/pokemonList';
import { existInFavorites, toggleFavorites } from '../../utils';
import confetti from 'canvas-confetti';

interface Props {
    pokemon: PokemonDetailProps
}

const PokemonName: FC<Props> = ({ pokemon }) => {

    const [isFavorite, setIsFavorite] = useState(() => (existInFavorites(pokemon.id)))

    const onToggleFavorite = () => {
        toggleFavorites(pokemon.id);
        setIsFavorite(!isFavorite);

        if (isFavorite) return;

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            },
        })
    }

    return (
        <MainLayout
            title={pokemon.name}
        >
            <Grid.Container
                gap={1.4} css={{ mt: "1rem" }}
            >
                <Grid xs={12} sm={4}>
                    <Card hoverable css={{ p: "30px" }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || './no-image.png'}
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
                            <Text h1 transform='capitalize'>
                                {pokemon.name}
                            </Text>
                            <Button
                                onClick={onToggleFavorite}
                                color="gradient"
                                ghost={!isFavorite}
                            >
                                {isFavorite ? "Remove from favorites" : "Add to favorites"}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>
                                Sprites:
                            </Text>
                            <Container
                                display='flex'
                                direction='row'
                            >
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </MainLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const { data } = await pokeApi.get<PokemonListProps>("/pokemon", { params: { limit: 151 } });

    const paths = data.results.map(pokemon => ({
        params: {
            name: pokemon.name
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string }

    const { data: pokemon } = await pokeApi.get<PokemonDetailProps>(`/pokemon/${name}`)

    return {
        props: {
            pokemon
        }
    }

}

export default PokemonName