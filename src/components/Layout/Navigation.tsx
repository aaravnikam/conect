import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-col space-y-4 p-4">
      <Link href="/" className="text-primary-text hover:bg-hover-state rounded p-2">
        Home
      </Link>
      <Link href="/explore" className="text-primary-text hover:bg-hover-state rounded p-2">
        Explore
      </Link>
      <Link href="/profile" className="text-primary-text hover:bg-hover-state rounded p-2">
        Profile
      </Link>
      <Link href="/settings" className="text-primary-text hover:bg-hover-state rounded p-2">
        Settings
      </Link>
      <Link href="/login" className="text-primary-text hover:bg-hover-state rounded p-2">
        Login
      </Link>
      <Link href="/signup" className="text-primary-text hover:bg-hover-state rounded p-2">
        Signup
      </Link>
    </nav>
  );
};

export default Navigation;