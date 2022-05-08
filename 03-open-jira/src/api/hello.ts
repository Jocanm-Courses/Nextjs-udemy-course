import { NextApiRequest, NextApiResponse } from 'next'

type response = {
    message: string,
    ok: boolean
}

const handler = (req: NextApiRequest, res: NextApiResponse<response>) => {
    res.json({
        message: 'Hello World',
        ok: true
    })

    
}

export default handler