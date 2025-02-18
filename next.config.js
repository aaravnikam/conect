module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  env: {
    API_URL: process.env.API_URL, // Example of using environment variables
  },
  webpack: (config) => {
    // Custom webpack configurations can go here
    return config;
  },
};