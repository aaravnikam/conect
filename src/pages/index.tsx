import { useEffect, useState } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import PostList from '../components/Feed/PostList';
import SkeletonLoader from '../components/Feed/SkeletonLoader';
import { fetchPosts } from '../utils/api';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-2xl mx-auto p-4">
        {loading ? <SkeletonLoader /> : <PostList posts={posts} />}
      </main>
      <Footer />
    </div>
  );
};

export default Home;