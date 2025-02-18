import axios from 'axios';
import { Post } from '../types/models';

const API_URL = '/api/posts';

export const fetchPosts = async (): Promise<Post[]> => {
    try {
        const response = await axios.get<Post[]>(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching posts');
    }
};

export const fetchPostById = async (id: string): Promise<Post> => {
    try {
        const response = await axios.get<Post>(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching post');
    }
};

export const createPost = async (content: string): Promise<Post> => {
    try {
        const response = await axios.post<Post>(API_URL, { content });
        return response.data;
    } catch (error) {
        throw new Error('Error creating post');
    }
};

export const likePost = async (id: string): Promise<Post> => {
    try {
        const response = await axios.post<Post>(`${API_URL}/like`, { id });
        return response.data;
    } catch (error) {
        throw new Error('Error liking post');
    }
};