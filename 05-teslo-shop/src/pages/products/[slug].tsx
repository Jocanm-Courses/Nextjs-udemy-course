import { Box, Button, Grid, Typography, Chip } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react';
import { ShopLayout } from '../../components/layouts';
import { ProductSlideShow, SizeSelector } from '../../components/products';
import { ItemCounter } from '../../components/ui';
import { getAllProductsSlugs, getProductBySlug } from '../../database';
import { ICartProduct, IProduct } from '../../interfaces';
import { ValidSizes } from '../../database/products';
import { useRouter } from 'next/router';
import { useCartContext } from '../../context/cart';

interface IProps {
    product: IProduct;
}

const SlugPage: NextPage<IProps> = ({ product }) => {

    const router = useRouter()
    const { addToCart } = useCartContext()

    const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
        id: product.id,
        description: product.description,
        image: product.images[0],
        price: product.price,
        size: undefined,
        slug: product.slug,
        title: product.title,
        gender: product.gender,
        quantity: 1,
    })

    const setSize = (size: ValidSizes) => {
        setTempCartProduct(product => ({
            ...product,
            size
        }))
    }

    const onUpdateQuantity = (newValue: number) => {
        setTempCartProduct(product => ({
            ...product,
            quantity: newValue
        }))
    }

    const onAddToCart = () => {
        addToCart(tempCartProduct)
        router.push('/cart')
    }

    return (
        <ShopLayout title={product?.title} pageDescription={product?.description}>
            <Grid container spacing={3}>

                <Grid item xs={12} sm={7}>
                    <ProductSlideShow
                        images={product?.images || []}
                    />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Box display="flex" flexDirection="column" >

                        <Typography variant="h1" component="h1">{product?.title}</Typography>
                        <Typography variant="subtitle1" component="h2">${product?.price}</Typography>

                        <Box sx={{ my: 2 }}>
                            <Typography variant="subtitle2">Cantidad</Typography>
                            <ItemCounter
                                currentValue={tempCartProduct.quantity}
                                updatedQuantity={onUpdateQuantity}
                                maxValue={product.inStock}
                            />
                            <SizeSelector
                                setSize={setSize}
                                sizes={product?.sizes || []}
                                selectedSize={tempCartProduct.size}
                            />
                        </Box>

                        {
                            product.inStock > 0
                                ? (
                                    <Button
                                        color="secondary"
                                        className="circular-btn"
                                        onClick={onAddToCart}
                                        disabled={!tempCartProduct.size}
                                    >
                                        {
                                            tempCartProduct.size
                                                ? "Agregar al carrito"
                                                : "Seleccione una talla"
                                        }
                                    </Button>
                                )
                                : <Chip label="No hay disponibles" color="error" variant="outlined" />
                        }



                        <Box sx={{ mt: 3 }}>
                            <Typography variant="subtitle2">Descripción</Typography>
                            <Typography variant="body2">{product?.description}</Typography>
                        </Box>

                    </Box>
                </Grid>

            </Grid>
        </ShopLayout>
    )
}

export default SlugPage




export const getStaticPaths: GetStaticPaths = async () => {

    const allSlugs = await getAllProductsSlugs();

    const paths = allSlugs.map(({ slug }) => ({
        params: { slug }
    }))

    return {
        paths,
        fallback: "blocking"
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { slug = "" } = params as { slug: string }

    const product = await getProductBySlug(slug)

    if (!product) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    return {
        props: {
            product,
        },
        revalidate: 86400
    }
}









// export const getServerSideProps: GetServerSideProps = async ({ params }: GetServerSidePropsContext) => {

//     const { slug } = params as { slug: string }

//     const product = await getProductBySlug(slug)

//     if (!product) {
//         return {
//             redirect: {
//                 destination: "/",
//                 permanent: false
//             }
//         }
//     }

//     return {
//         props: {
//             product
//         }
//     }
// }