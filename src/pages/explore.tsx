import { useEffect, useState } from 'react';
import PostList from '../components/Feed/PostList';
import SkeletonLoader from '../components/Feed/SkeletonLoader';
import { fetchTrendingPosts } from '../utils/api';

const Explore = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const trendingPosts = await fetchTrendingPosts();
        setPosts(trendingPosts);
      } catch (err) {
        setError('Failed to load trending posts');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Explore Trending Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Explore;