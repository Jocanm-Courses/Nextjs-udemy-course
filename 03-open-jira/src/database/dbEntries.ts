import { prisma } from '../lib'

export const getEntrybYId = async (id: string) => {

    const idRegex = /^[a-f\d]{24}$/i;

    if (!idRegex.test(id)) return null;

    await prisma.$connect()

    const entry = await prisma.entry.findUnique({
        where: {
            id
        }
    })

    await prisma.$disconnect()

    return JSON.parse(JSON.stringify(entry))
}