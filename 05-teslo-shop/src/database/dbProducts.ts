import { IProduct } from '../interfaces';
import { prisma } from '../lib';

const { product } = prisma

export const getProductBySlug = async (slug: string): Promise<IProduct | null> => {

    const productFound = await product.findUnique({
        where: {
            slug
        }
    })

    return productFound
        ? JSON.parse(JSON.stringify(productFound))
        : null

}

interface ProductsSlugs {
    slug: string
}

export const getAllProductsSlugs = async (): Promise<ProductsSlugs[]> => {

    return await product.findMany({
        select: {
            slug: true
        }
    })


}

export const getProductsByTerm = async (term: string): Promise<IProduct[]> => {

    term = term.toLowerCase()

    const products = await product.findMany({
        where: {
            OR: [
                { slug: { contains: term } },
                { tags: { has: term } }
            ]
        },
        select: { title: true, images: true, inStock: true, price: true, slug: true, }
    })

    return JSON.parse(JSON.stringify(products))

}


export const getAllProducts = async (): Promise<IProduct[]> => {

    const products = await product.findMany()

    return JSON.parse(JSON.stringify(products))

}