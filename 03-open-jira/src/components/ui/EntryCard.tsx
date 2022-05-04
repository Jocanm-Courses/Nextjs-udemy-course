import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Entry } from '../../interfaces'
import { FC } from 'react';

interface Props {
    entry:Entry
}

export const EntryCard:FC<Props> = ({entry}) => {
    return (
        <Card
            sx={{ mb: 1 }}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: "pre-line" }}>
                        {entry.description}
                    </Typography>
                </CardContent>

                <CardActions sx={{ display: "flex", justifyContent: "end", pr: 2 }}>
                    <Typography variant='body2'>
                        hace 30 min
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
