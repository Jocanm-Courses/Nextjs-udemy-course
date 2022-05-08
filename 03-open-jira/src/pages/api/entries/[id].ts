import { Entry } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

type Data =
    | { message: string }
    | Entry

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query
    const { method } = req

    switch (method) {
        case "PUT":
            return updateEntry(req, res)

        default:
            return res.status(405).json({
                message: "Method not allowed"
            })
    }


}

export const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { id } = req.query

    try {
        const entry = await prisma.entry.findUnique({
            where: { id: id as string }
        })

        if (!entry) {
            return res.status(404).json({
                message: "Entry not found" + id
            })
        }

        const {
            description = entry.description,
            status = entry.status
        } = req.body

        const updatedEntry = await prisma.entry.update({
            where: { id: id as string },
            data: {
                description, status
            }
        })

        return res.status(200).json(updatedEntry)
    } catch (error) {
        console.error(error)
        return res.status(500).json(JSON.stringify(error) as any)
    }

}