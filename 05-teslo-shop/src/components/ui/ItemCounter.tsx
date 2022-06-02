import React, { FC } from 'react'
import { Box, IconButton, Typography } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

interface Props {
    currentValue: number
    maxValue: number

    updatedQuantity: (newValue: number) => void
}

export const ItemCounter: FC<Props> = ({ currentValue, maxValue, updatedQuantity }) => {

    const remove = () => {
        if(currentValue <= 1) return;
        updatedQuantity(currentValue - 1)
    }

    const add = () => {
        if(currentValue >= maxValue) return;
        updatedQuantity(currentValue + 1)
    }

    return (
        <Box display="flex" alignItems="center">

            <IconButton onClick={remove}>
                <RemoveCircleOutline />
            </IconButton>

            <Typography sx={{ width: 40, textAlign: "center" }}>
                {currentValue}
            </Typography>

            <IconButton onClick={add}>
                <AddCircleOutline />
            </IconButton>

        </Box>
    )
}
