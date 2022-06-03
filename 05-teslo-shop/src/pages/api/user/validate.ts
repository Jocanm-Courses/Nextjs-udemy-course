import type { NextApiRequest, NextApiResponse } from 'next';
import { isValidToken } from '../../../helpers';
import { prisma } from '../../../lib/prisma';
import { generateJWt } from '../../../helpers/jwt';

type Data =
    | { message: string }
    | {
        token: string,
        user: {
            id: string,
            name: string,
            email: string,
            role: string
        }
    }

export default function hanlder(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return checkJwt(req, res)

        default:
            return res.status(405).json({ message: 'Method not allowed' })
    }

}

async function checkJwt(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { token } = req.cookies

    let userId = ""

    try {
        userId = await isValidToken(token)
    } catch (error) {
        return res.status(401).json({ message: 'Token is not valid' })
    }

    const user = await prisma.user.findUnique({
        where: { id: userId }
    })

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }


    const { id, name, role, email } = user

    const newToken = generateJWt({ email, id })

    return res.status(200).json({
        token: newToken,
        user: {
            id,
            name,
            email,
            role
        }
    })

}
