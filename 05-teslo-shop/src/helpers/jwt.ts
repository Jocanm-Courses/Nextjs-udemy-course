import jwt from 'jsonwebtoken';

const secretSeed = process.env.JWT_SECRET_SEED

interface Params {
    id: string;
    email: string;
}

export const generateJWt = (props: Params): string => {

    if (!secretSeed) {
        throw new Error('JWT seed is not defined')
    }

    const token = jwt.sign(

        props,

        secretSeed,

        {
            expiresIn: '1d'
        }

    )

    return token;

}

export const isValidToken = (token: string): Promise<string> => {
    if (!secretSeed) {
        throw new Error('JWT seed is not defined')
    }

    if(!token) {
        return Promise.reject('Token is not defined')
    }

    return new Promise((resolve, reject) => {

        try {
            jwt.verify(token, secretSeed, (err, payload) => {

                if (err) return reject('JWT is not valid')

                const { id } = payload as { id: string }

                resolve(id)

            })
        } catch (error) {
            reject(error)
        }

    })
}