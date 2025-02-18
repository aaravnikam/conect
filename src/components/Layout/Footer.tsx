import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-4">
            <div className="max-w-3xl mx-auto text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} Twitter-like Platform. All rights reserved.</p>
                <p>
                    <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a> | 
                    <a href="/terms" className="text-accent hover:underline"> Terms of Service</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;