import type { NextApiRequest, NextApiResponse } from 'next';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import { getUserByEmail } from '../../../utils/auth';
import { setLoginSession } from '../../../utils/auth';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isValid = await compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const session = {
      email: user.email,
      username: user.username,
      id: user.id,
    };

    await setLoginSession(res, session);

    return res.status(200).json({ message: 'Login successful', session });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}