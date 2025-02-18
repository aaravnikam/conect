import axios from 'axios';
import { User } from '../types/models';

const API_URL = '/api/users';

export const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get<User[]>(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching users');
    }
};

export const fetchUserByUsername = async (username: string): Promise<User> => {
    try {
        const response = await axios.get<User>(`${API_URL}/${username}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching user with username: ${username}`);
    }
};

export const followUser = async (username: string): Promise<void> => {
    try {
        await axios.post(`${API_URL}/follow`, { username });
    } catch (error) {
        throw new Error(`Error following user: ${username}`);
    }
};

export const unfollowUser = async (username: string): Promise<void> => {
    try {
        await axios.post(`${API_URL}/follow`, { username, action: 'unfollow' });
    } catch (error) {
        throw new Error(`Error unfollowing user: ${username}`);
    }
};