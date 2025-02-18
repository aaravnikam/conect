export type User = {
  username: string;
  email: string;
  bio?: string;
  following: string[];
  followers: string[];
  joinDate: Date;
};

export type Post = {
  content: string;
  author: User;
  timestamp: Date;
  likesCount: number;
  repostCount: number;
  replyCount: number;
  replyTo?: Post;
};