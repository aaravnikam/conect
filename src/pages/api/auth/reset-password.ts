import { NextApiRequest, NextApiResponse } from 'next';
import { sendPasswordResetEmail } from '../../../services/authService';
import { validateEmail } from '../../../utils/validation';

export default async function resetPassword(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email } = req.body;

    if (!email || !validateEmail(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
    }

    try {
        await sendPasswordResetEmail(email);
        return res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
        return res.status(500).json({ message: 'Error sending password reset email', error: error.message });
    }
}