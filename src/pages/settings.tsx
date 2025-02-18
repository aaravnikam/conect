import React from 'react';
import { useState } from 'react';
import { updateUserSettings } from '../services/userService';
import { useAuth } from '../utils/hooks';

const Settings: React.FC = () => {
    const { user } = useAuth();
    const [bio, setBio] = useState(user?.bio || '');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBio(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            await updateUserSettings({ bio });
            setSuccess('Settings updated successfully!');
        } catch (err) {
            setError('Failed to update settings. Please try again.');
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Settings</h1>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                        Bio
                    </label>
                    <textarea
                        id="bio"
                        value={bio}
                        onChange={handleBioChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        rows={4}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-accent text-white py-2 rounded-md hover:bg-opacity-80 transition"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Settings;