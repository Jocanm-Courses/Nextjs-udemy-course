import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcryptjs';
import { generateJWt } from "../../../helpers";

type Data =
    | { message?: string }
    | {
        token: string,
        user: {
            id: string,
            name: string,
            email: string,
            role: string
        }
    }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'POST':
            return registerUser(req, res)

        default:
            return res.status(405).json({ message: 'Method not allowed' })
    }

}

async function registerUser(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { email, password, name } = req.body as { email: string, password: string, name: string }

    if (!email || !password || !name) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters' })
    }

    if (name.length < 3) {
        return res.status(400).json({ message: 'Name must be at least 3 characters' })
    }

    if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))) {
        return res.status(400).json({ message: 'Email is invalid' })
    }

    const user = await prisma.user.findUnique({
        where: { email }
    })

    if (user) {
        return res.status(400).json({ message: 'User already exist' })
    }

    const hashedPassword = bcrypt.hashSync(password)

    try {

        const newUser = await prisma.user.create({
            data: {
                email: email.toLowerCase(),
                password: hashedPassword,
                role: 'client',
                name
            }
        })

        const { id, role } = newUser

        const token = generateJWt({ email, id })

        return res.status(201).json({
            token,
            user: {
                id,
                name,
                email,
                role
            }
        })

    } catch (error) {

        console.log(error)
        return res.status(500).json({ message: 'Internal error' })

    }

}   
