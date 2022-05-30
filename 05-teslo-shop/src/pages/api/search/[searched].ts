import { prisma } from '../../../lib/prisma';
import { Product } from '@prisma/client'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
    { message: string } |
    Product[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { method } = req

    switch (method) {
        case "GET":
            return searchProducts(req, res)
        default:
            res.status(405).json({ message: "Method not allowed" })
    }

}
async function searchProducts(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { product } = prisma
    let { searched } = req.query as { searched: string }

    searched = searched.toLowerCase()

    if (searched.length === 0) {
        return res.status(400).json({ message: "Missing searched" })
    }

    const products = await product.findMany({
        where: {
            OR: [
                { slug: { contains: searched } },
                { tags: { has: searched } }
            ]
        },
        select: { title: true, images: true, inStock: true, price: true, slug: true, }
    })

    return res.status(200).json(products as Product[])
}

