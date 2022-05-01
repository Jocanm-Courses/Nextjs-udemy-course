import React, { FC } from 'react'
import { SmallPokemon } from '../../types/interfaces'
import { Grid, Card, Row, Text } from '@nextui-org/react';
import Link from 'next/link';

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const { id, image, name } = pokemon

    return (
        // <Link href={`/pokemon/${id}`} passHref>
        <Link href={`/name/${name}`} passHref>
            <Grid xs={6} sm={3} md={2} xl={1} key={id}
            >
                <Card hoverable clickable>
                    <Card.Body
                        css={{ p: 1 }}
                    >
                        <Card.Image
                            src={image}
                            width="100%"
                            height={140}
                        />
                    </Card.Body>
                    <Card.Footer>
                        <Row justify='space-between'>
                            <Text transform='capitalize'>{name}</Text>
                            <Text> # {id}</Text>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
        </Link>
    )
}
