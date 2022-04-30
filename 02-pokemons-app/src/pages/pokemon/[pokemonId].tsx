import { GetStaticPaths, NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { pokeApi } from '../../apis';
import { MainLayout } from '../../components/layouts';
import { PokemonListProps } from '../../types/interfaces';
import { PokemonDetailProps, DreamWorld } from '../../types/interfaces/pokemonDetailsInterface';
import { Grid, Card, Text, Button, Container, Image } from '@nextui-org/react';

interface Props {
    pokemon: PokemonDetailProps
}

const PokemonInfo: NextPage<Props> = ({ pokemon }) => {

    return (
        <MainLayout
            title={`${pokemon.name} - Pokédex`}
        >
            <Grid.Container
                gap={1.4} css={{mt:"1rem"}}
            >
                <Grid xs={12} sm={4}>
                    <Card hoverable css={{ p: "30px" }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || ''}
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
                                color="gradient"
                                ghost
                            >
                                Guardar en favoritos
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