import React from 'react';

interface PostCardProps {
  content: string;
  author: string;
  timestamp: string;
  likesCount: number;
  repostCount: number;
  replyCount: number;
  onLike: () => void;
  onRepost: () => void;
  onReply: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  content,
  author,
  timestamp,
  likesCount,
  repostCount,
  replyCount,
  onLike,
  onRepost,
  onReply,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4">
      <div className="text-sm text-gray-600">{author}</div>
      <div className="text-gray-900 mt-1">{content}</div>
      <div className="text-xs text-gray-500 mt-2">{timestamp}</div>
      <div className="flex justify-between mt-4">
        <button onClick={onLike} className="text-accent hover:bg-hover-state">
          Like {likesCount}
        </button>
        <button onClick={onRepost} className="text-accent hover:bg-hover-state">
          Repost {repostCount}
        </button>
        <button onClick={onReply} className="text-accent hover:bg-hover-state">
          Reply {replyCount}
        </button>
      </div>
    </div>
  );
};

export default PostCard;