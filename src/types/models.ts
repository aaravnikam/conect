export interface User {
  username: string;
  email: string;
  bio?: string;
  following: string[];
  followers: string[];
  joinDate: Date;
}

export interface Post {
  content: string;
  author: User;
  timestamp: Date;
  likesCount: number;
  repostCount: number;
  replyCount: number;
  replyTo?: Post;
}