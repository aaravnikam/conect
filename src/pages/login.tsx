import { useState } from 'react';
import { useRouter } from 'next/router';
import LoginForm from '../components/Auth/LoginForm';
import { authenticateUser } from '../services/authService';

const LoginPage = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (username, password) => {
    try {
      await authenticateUser(username, password);
      router.push('/'); // Redirect to home after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="max-w-md w-full p-8 bg-white border border-border rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-primary-text mb-4">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;