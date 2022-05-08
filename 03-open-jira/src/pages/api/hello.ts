// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const entries = await prisma.entry.findMany()

  res.status(200).json(entries as any)

}
