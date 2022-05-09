import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Entry } from '../../interfaces'
import { FC } from 'react';
import { useUiContext } from '../../context/ui';
import { useRouter } from 'next/router';

interface Props {
    entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { setIsDragging } = useUiContext()
    const { push } = useRouter()

    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text/plain', entry.id)
        setIsDragging(true)
    }

    const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        setIsDragging(false)
    }

    const onClick = () => {
        push(`/entries/${entry.id}`)
    }

    return (
        <Card
            sx={{ mb: 1 }}
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onClick={onClick}
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
