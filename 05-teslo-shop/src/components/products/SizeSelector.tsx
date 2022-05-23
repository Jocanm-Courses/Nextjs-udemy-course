import React, { FC } from 'react'
import { ValidSizes } from '../../database/products'
import { Box, Button } from '@mui/material';

interface Props {
    selectedSize?: ValidSizes
    sizes: ValidSizes[]
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
    return (
        <Box>
            {
                sizes.map((size) => ((
                    <Button
                        key={size}
                        size="small"
                        color={selectedSize === size ? 'primary' : 'info'}
                    >
                        {size}
                    </Button>
                )))
            }
        </Box>
    )
}
