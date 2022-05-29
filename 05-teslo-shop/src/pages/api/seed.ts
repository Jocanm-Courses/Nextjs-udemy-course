import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib';
import { initialData } from '../../database/products';

type Data = {
    message: string
    data?: any
}

const { product } = prisma

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === "production") {
        return res.status(401).json({ message: "" })
    };

    await product.deleteMany()
    const products = await product.createMany({
        data: initialData.products
    })

    res.status(200).json({ message: "ok", data: products })

}
