import { Box, Button, Grid, Typography, Chip } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import { ShopLayout } from '../../components/layouts';
import { ProductSlideShow, SizeSelector } from '../../components/products';
import { ItemCounter } from '../../components/ui';
import { getAllProductsSlugs, getProductBySlug } from '../../database';
import { IProduct } from '../../interfaces';

interface IProps {
    product: IProduct;
}

const SlugPage: NextPage<IProps> = ({ product }) => {

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
                            <ItemCounter />
                            <SizeSelector
                                sizes={product?.sizes || []}
                            />
                        </Box>

                        {
                            product.inStock > 0
                                ? (
                                    <Button color="secondary" className="circular-btn">
                                        Agregar al carrito
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