import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import UserProfile from '../components/User/UserProfile';
import { getUserProfile } from '../services/userService';

const ProfilePage = () => {
  const router = useRouter();
  const { username } = router.query;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (username) {
      const fetchUserProfile = async () => {
        try {
          const userData = await getUserProfile(username);
          setUser(userData);
        } catch (err) {
          setError('Failed to load user profile');
        } finally {
          setLoading(false);
        }
      };

      fetchUserProfile();
    }
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {user && <UserProfile user={user} />}
    </div>
  );
};

export default ProfilePage;