import { Entry } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

type data =
    | { message: string }
    | Entry[]
    | Entry

export default async function handler(req: NextApiRequest, res: NextApiResponse<data>) {

    const { method } = req

    switch (method) {
        case "GET":
            return getEntries(res)

        case "POST":
            return createEntry(req, res)

        default:
            return res.status(405).json({
                message: "Method not allowed"
            })
    }
}


const getEntries = async (res: NextApiResponse<data>) => {

    const entries = await prisma.entry.findMany({
        orderBy: {
            createdAt: "asc"
        }
    })

    res.status(200).json(entries)

}

export const createEntry = async (req: NextApiRequest, res: NextApiResponse<data>) => {

    const { description = "" } = req.body

    if (!description) {
        return res.status(400).json({
            message: "Description is required"
        })
    }

    try {

        const newEntry = await prisma.entry.create({
            data: { description }
        })

        res.status(201).json(newEntry)

    } catch (error) {

        console.log(error)
        res.status(500).json(error as any)

    }

} 