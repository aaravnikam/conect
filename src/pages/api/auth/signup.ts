import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { createUser } from '../../../services/authService';
import { validateSignup } from '../../../utils/validation';

export default async function signup(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, email, password } = req.body;

  const { error } = validateSignup({ username, email, password });
  if (error) {
    return res.status(400).json({ message: error });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser({ username, email, password: hashedPassword });

    // Send email verification logic here (if applicable)

    return res.status(201).json({ message: 'User created successfully', user });
  } catch (err) {
    if (err.code === '23505') { // Unique violation error code for PostgreSQL
      return res.status(409).json({ message: 'Username or email already exists' });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
}