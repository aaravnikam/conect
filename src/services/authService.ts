import axios from 'axios';
import { User } from '../types/models';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/auth';

export const login = async (email: string, password: string): Promise<string> => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data.token;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};

export const signup = async (username: string, email: string, password: string): Promise<void> => {
    try {
        await axios.post(`${API_URL}/signup`, { username, email, password });
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Signup failed');
    }
};

export const resetPassword = async (email: string): Promise<void> => {
    try {
        await axios.post(`${API_URL}/reset-password`, { email });
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Password reset failed');
    }
};

export const getCurrentUser = async (): Promise<User> => {
    try {
        const response = await axios.get(`${API_URL}/me`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to fetch user data');
    }
};