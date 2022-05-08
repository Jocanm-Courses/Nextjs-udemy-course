import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma';
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

type Data = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === "production") {
        res.status(401).json({
            message: "No tiene acceso a esta ruta"
        })
    }

    prisma.$connect()
        
    const entries = prisma.entry.findMany()

    prisma.$disconnect()


    res.status(200).json(entries as any)

}