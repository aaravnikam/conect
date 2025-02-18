import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '../../../lib/prisma'; // Assuming you have a prisma instance set up

export default async function likePost(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { postId } = req.body;

  if (!postId) {
    return res.status(400).json({ message: 'Post ID is required' });
  }

  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const like = await prisma.like.create({
      data: {
        userId: session.user.id,
        postId: postId,
      },
    });

    return res.status(200).json({ message: 'Post liked', like });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}