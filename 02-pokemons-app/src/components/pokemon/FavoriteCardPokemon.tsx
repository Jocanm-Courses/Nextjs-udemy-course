import React, { FC } from 'react'
import { Card, Grid } from '@nextui-org/react';

interface Props {
    pokemon: number
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemon }) => {
    return (
        <Grid xs={6} sm={3} md={2} xl={1}
        >
            <Card hoverable clickable css={{ p: "10" }}
            >
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg`}
                    width={"100%"}
                    height={140}
                />
            </Card>
        </Grid>
    )
}
