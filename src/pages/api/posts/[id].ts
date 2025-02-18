import { NextApiRequest, NextApiResponse } from 'next';
import { getPostById } from '../../../services/postService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case 'GET':
            try {
                const post = await getPostById(id as string);
                if (!post) {
                    return res.status(404).json({ message: 'Post not found' });
                }
                return res.status(200).json(post);
            } catch (error) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        default:
            res.setHeader('Allow', ['GET']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}