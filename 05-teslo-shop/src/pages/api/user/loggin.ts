import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib';
import bcrypt from 'bcryptjs';
import { generateJWt } from '../../../helpers';

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
        case 'POST':
            return loginUser(req, res)

        default:
            return res.status(405).json({ message: 'Method not allowed' })
    }

}

async function loginUser(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { email, password } = req.body as { email: string, password: string }

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' })
    }

    const user = await prisma.user.findUnique({
        where: { email }
    })

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(400).json({ message: 'Password invalid' })
    }

    const { id, name, role } = user

    const token = generateJWt({ email, id })

    return res.status(200).json({
        token,
        user: {
            id,
            name,
            email,
            role
        }
    })

}
