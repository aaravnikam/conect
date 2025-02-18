import React from 'react';
import PostCard from './PostCard';
import SkeletonLoader from './SkeletonLoader';

interface Post {
  id: string;
  content: string;
  author: {
    username: string;
  };
  timestamp: string;
  likesCount: number;
  repostCount: number;
  replyCount: number;
}

interface PostListProps {
  posts: Post[];
  loading: boolean;
}

const PostList: React.FC<PostListProps> = ({ posts, loading }) => {
  if (loading) {
    return (
      <div className="flex flex-col space-y-4">
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;