import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib';
import { initialData } from '../../database/seed-data';

type Data = {
    message: string
    data?: any
}

const { product, user } = prisma

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === "production") {
        return res.status(401).json({ message: "" })
    };

    await product.deleteMany()
    await user.deleteMany()

    const products = await product.createMany({
        data: initialData.products
    })
    const users = await user.createMany({
        data: initialData.users
    })

    res.status(200).json({ message: "ok", data: { products, users } })

}
