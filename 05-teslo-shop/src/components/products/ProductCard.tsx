import React, { FC, useMemo, useState } from 'react'
import { IProduct } from '../../interfaces/products';
import * as M from '@mui/material';
import Link from 'next/link';

interface Props {
    product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false)
    const [isImageLoaded, setIsImageLoaded] = useState(false)

    const handleMouseEnter = () => { setIsHovered(true) }

    const handleMouseLeave = () => { setIsHovered(false) }

    const handleImageLoad = () => { setIsImageLoaded(true) }

    const productImage = useMemo(() => {

        return !isHovered
            ? `/products/${product.images[0]}`
            : `/products/${product.images[1]}`

    }, [isHovered, product.images])

    return (
        <M.Grid
            item
            xs={6}
            sm={4}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <M.Card>
                <Link href={`/products/${product.slug}`} passHref prefetch={false}>

                    <M.CardActionArea>

                        {
                            (product.inStock === 0) && (
                                <M.Chip
                                    color="primary"
                                    label="No hay disponibles"
                                    sx={{ position: "absolute", zIndex: 9, top: "10px", left: "10px" }}
                                />
                            )
                        }
                        <M.CardMedia
                            className="fadeIn"
                            component="img"
                            image={productImage}
                            alt={product.title}
                            onLoad={handleImageLoad}
                        />
                    </M.CardActionArea>
                </Link>
            </M.Card>

            <M.Box sx={{ mt: 1, display: isImageLoaded ? "block" : "none" }} className="fadeIn">
                <M.Typography fontWeight={700}>{product.title}</M.Typography>
                <M.Typography fontWeight={500}>{`$${product.price}`}</M.Typography>
            </M.Box>

        </M.Grid>
    )
}
