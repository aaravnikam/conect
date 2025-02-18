import { NextApiRequest, NextApiResponse } from 'next';
import { getUsers } from '../../../services/userService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const users = await getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}