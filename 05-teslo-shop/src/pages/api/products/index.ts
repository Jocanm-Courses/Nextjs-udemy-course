import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma';
import { Product } from '@prisma/client'
import { SHOP_CONSTANTS } from '../../../database';

type Data =
    { message: string } |
    {
        slug: string;
        images: string[];
        price: number;
        title: string;
    }[]

const { validGenders } = SHOP_CONSTANTS

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case "GET":
            return getProducts(req, res)

        default:
            res.status(405).json({ message: "Method not allowed" })
    }
}

async function getProducts(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { gender = "all" } = req.query
    const { product } = prisma

    let where = {}

    if (gender !== "all" && validGenders.includes(gender as string)) {
        where = { gender }
    }

    try {
        const products = await product.findMany({
            select: {
                slug: true,
                images: true,
                price: true,
                title: true,
                gender: true
            },
            where
        })

        res.status(200).json(products)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Error" })
    }

}
