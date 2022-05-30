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