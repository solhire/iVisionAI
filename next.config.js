/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.gravatar.com',
      'upload.wikimedia.org'
    ],
  },
  experimental: {
    turbo: {},
  },
};

module.exports = nextConfig; 