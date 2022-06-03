import React, { FC } from 'react'
import { ValidSizes } from '../../database/seed-data'
import { Box, Button } from '@mui/material';

interface Props {
    selectedSize?: ValidSizes
    sizes: ValidSizes[]
    setSize: (size: ValidSizes) => void
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes, setSize }) => {
    return (
        <Box>
            {
                sizes.map((size) => ((
                    <Button
                        key={size}
                        size="small"
                        color={selectedSize === size ? 'primary' : 'info'}
                        onClick={() => setSize(size)}
                    >
                        {size}
                    </Button>
                )))
            }
        </Box>
    )
}
