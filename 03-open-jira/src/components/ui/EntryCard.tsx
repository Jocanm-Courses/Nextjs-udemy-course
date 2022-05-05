import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Entry } from '../../interfaces'
import { FC } from 'react';
import { useUiContext } from '../../context/ui';

interface Props {
    entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { setIsDragging } = useUiContext()

    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text/plain', entry._id)
        setIsDragging(true)
    }
    
    const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        setIsDragging(false)
    }

    return (
        <Card
            sx={{ mb: 1 }}
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
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
