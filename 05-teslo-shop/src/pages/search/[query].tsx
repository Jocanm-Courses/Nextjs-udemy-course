import * as MU from '@mui/material'
import { GetServerSideProps, NextPage } from 'next';
import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products'
import { FullScreenLoading } from '../../components/ui'
import { getAllProducts, getProductsByTerm } from '../../database'
import { useProducts } from '../../hooks'
import { IProduct } from '../../interfaces'

interface Props {
    products: IProduct[]
    foundProducts: boolean;
    query: string
}

const SearchPage: NextPage<Props> = ({ products, query, foundProducts }) => {


    return (
        <ShopLayout
            title="Teslo-Shop | Home"
            pageDescription="Encuentra los mejores productos de Teslo Aqui"
        >
            <MU.Typography variant="h1" component="h1">Buscar Producto</MU.Typography>
            {
                foundProducts
                    ? <MU.Typography variant="h2" sx={{ mb: 1 }}>Término: {query}</MU.Typography>
                    : (
                        <MU.Box display="flex" gap={2}>
                            <MU.Typography variant="h2" sx={{ mb: 1 }}>No encontramos ningun producto</MU.Typography>
                            <MU.Typography variant="h2" sx={{ mb: 1 }} color="secondary">{query}</MU.Typography>
                        </MU.Box>
                    )
            }

            <ProductList products={products} />

        </ShopLayout>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { query = "" } = params as { query: string }

    if (!query.length) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    let products = await getProductsByTerm(query)

    const foundProducts = products.length > 0

    if(!foundProducts) {
        products = await getAllProducts()
    }

    return {
        props: {
            query,
            products,
            foundProducts,
        }
    }
}

export default SearchPage