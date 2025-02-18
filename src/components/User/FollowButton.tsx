import React, { useState } from 'react';
import { followUser, unfollowUser } from '../../services/userService';

interface FollowButtonProps {
  userId: string;
  isFollowing: boolean;
}

const FollowButton: React.FC<FollowButtonProps> = ({ userId, isFollowing }) => {
  const [following, setFollowing] = useState(isFollowing);
  const [loading, setLoading] = useState(false);

  const handleFollowToggle = async () => {
    setLoading(true);
    try {
      if (following) {
        await unfollowUser(userId);
      } else {
        await followUser(userId);
      }
      setFollowing(!following);
    } catch (error) {
      console.error('Error toggling follow status:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleFollowToggle}
      disabled={loading}
      className={`px-4 py-2 rounded-md transition-colors duration-200 ${
        following ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
      } hover:bg-opacity-80`}
    >
      {loading ? 'Loading...' : following ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowButton;