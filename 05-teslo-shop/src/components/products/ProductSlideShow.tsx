import React, { FC } from 'react'
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import styles from './ProductSlideShow.module.css'

interface Props {
    images: string[]
}

export const ProductSlideShow: FC<Props> = ({ images }) => {
    return (
        <Slide
            indicators
            easing="ease"
            duration={7000}
        >
            {images.map((image) => {
                const url = `/products/${image}`

                return (
                    <div className={styles.eachSlide} key={image}>
                        <div style={{
                            backgroundImage: `url(${url})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}>

                        </div>
                    </div>
                )

            })}
        </Slide>
    )
}
