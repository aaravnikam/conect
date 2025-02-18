import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUserProfile } from '../../services/userService';
import FollowButton from './FollowButton';

const UserProfile = () => {
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
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-semibold">{user.username}</h1>
            <p className="text-gray-600">{user.bio}</p>
            <FollowButton userId={user.id} />
            <h2 className="mt-4 text-xl font-medium">Posts</h2>
            <ul>
                {user.posts.map(post => (
                    <li key={post.id} className="border-b border-gray-200 py-2">
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserProfile;