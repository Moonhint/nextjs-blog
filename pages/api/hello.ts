import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
    message: string
}

export default function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json({ message: 'Hellow' });
}
