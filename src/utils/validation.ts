import { z } from 'zod';

// Validation schema for user signup
export const signupSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters long').max(20, 'Username must be at most 20 characters long'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters long'),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

// Validation schema for user login
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

// Validation schema for password reset
export const passwordResetSchema = z.object({
  email: z.string().email('Invalid email address'),
});

// Validation schema for post content
export const postSchema = z.object({
  content: z.string().max(280, 'Post content must be at most 280 characters long'),
});