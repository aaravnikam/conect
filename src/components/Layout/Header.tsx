import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between p-4 border-b border-border">
            <div className="text-xl font-semibold text-primary-text">
                Twitter-like Platform
            </div>
            <nav className="flex space-x-4">
                <a href="/" className="text-secondary-text hover:text-accent">
                    Home
                </a>
                <a href="/explore" className="text-secondary-text hover:text-accent">
                    Explore
                </a>
                <a href="/profile" className="text-secondary-text hover:text-accent">
                    Profile
                </a>
                <a href="/settings" className="text-secondary-text hover:text-accent">
                    Settings
                </a>
            </nav>
        </header>
    );
};

export default Header;