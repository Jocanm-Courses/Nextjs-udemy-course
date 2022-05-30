import { prisma } from '../../../lib/prisma';
import { Product } from '@prisma/client'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
    { message: string } |
    Product

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method } = req

    switch (method) {
        case "GET":
            return getProductBySlug(req, res)
        default:
            res.status(405).json({ message: "Method not allowed" })
    }

}

async function getProductBySlug(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { slug } = req.query as { slug: string }
    const { product } = prisma

    if (!slug) {
        return res.status(400).json({ message: "Missing slug" })
    }

    try {
        const productFound = await product.findUnique({
            where: { slug }
        })

        if (!productFound) {
            return res.status(404).json({ message: "Product not found" })
        }

        return res.status(200).json(productFound)

    } catch (error) {
        return res.status(500).json({ message: error as string })
    }
}