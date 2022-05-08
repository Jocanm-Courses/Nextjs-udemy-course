import type { NextApiRequest, NextApiResponse } from 'next'
import { seedData } from '../../database/seed-data';
import { prisma } from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (process.env.NODE_ENV === "production") {
        res.status(401).json({
            message: "No tiene acceso a esta ruta"
        })
    }

    prisma.$connect()
        
    await prisma.entry.deleteMany()

    const entries = await prisma.entry.createMany({
        data: seedData.entries
    })

    prisma.$disconnect()

    res.status(200).json(entries as any)

}