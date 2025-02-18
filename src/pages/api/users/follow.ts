import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { followUser, unfollowUser } from '../../../services/userService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const { method } = req;
    const { username } = req.query;

    if (!username || typeof username !== 'string') {
        return res.status(400).json({ message: 'Invalid username' });
    }

    switch (method) {
        case 'POST':
            try {
                const result = await followUser(session.user.id, username);
                return res.status(200).json(result);
            } catch (error) {
                return res.status(500).json({ message: 'Error following user', error });
            }
        case 'DELETE':
            try {
                const result = await unfollowUser(session.user.id, username);
                return res.status(200).json(result);
            } catch (error) {
                return res.status(500).json({ message: 'Error unfollowing user', error });
            }
        default:
            res.setHeader('Allow', ['POST', 'DELETE']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}