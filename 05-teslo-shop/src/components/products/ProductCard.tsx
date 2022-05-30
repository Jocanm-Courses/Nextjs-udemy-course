import React, { FC, useMemo, useState } from 'react'
import { IProduct } from '../../interfaces/products';
import * as MU from '@mui/material';
import Link from 'next/link';

interface Props {
    product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false)
    const [isImageLoaded, setIsImageLoaded] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const handleImageLoad = () => {
        setIsImageLoaded(true)
    }

    const productImage = useMemo(() => {

        return !isHovered
            ? `/products/${product.images[0]}`
            : `/products/${product.images[1]}`

    }, [isHovered, product.images])

    return (
        <MU.Grid
            item
            xs={6}
            sm={4}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <MU.Card>
                <Link href={`/products/${product.slug}`} passHref prefetch={false}>
                    <MU.CardActionArea>
                        <MU.CardMedia
                            className="fadeIn"
                            component="img"
                            image={productImage}
                            alt={product.title}
                            onLoad={handleImageLoad}
                        />
                    </MU.CardActionArea>
                </Link>
            </MU.Card>

            <MU.Box sx={{ mt: 1, display: isImageLoaded ? "block" : "none" }} className="fadeIn">
                <MU.Typography fontWeight={700}>{product.title}</MU.Typography>
                <MU.Typography fontWeight={500}>{`$${product.price}`}</MU.Typography>
            </MU.Box>

        </MU.Grid>
    )
}
