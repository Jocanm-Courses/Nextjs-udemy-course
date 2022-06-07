import { prisma } from '../lib';
import bcrypt from 'bcryptjs';


interface IUser {
    email?: string;
    password?: string;
}

export const checkUser = async ({ email = "", password = "" }: IUser) => {

    const user = await prisma.user.findUnique({
        where: { email }
    })

    if (!user) {
        return null
    }

    if (!bcrypt.compareSync(password, user.password)) {
        return null
    }

    const { id, role, name } = user

    return { id, role, name, email }

}

export const validateOrCreateUser = async ({ oAuthEmail = "", oAuthName = "" }) => {

    try {
        const user = await prisma.user.findUnique({
            where: { email: oAuthEmail },
        })
    
        if (user) {
            const { name, id, role, email } = user
            return { name, id, role, email }
        }
    
        const newUser = await prisma.user.create({
            data: {
                email: oAuthEmail,
                name: oAuthName,
                password: "",
                role: "client",
            }
        })
    
        const { name, id, role, email } = newUser
        return { name, id, role, email }
    } catch (error) {
        console.log(error)
        return null
    }   

}