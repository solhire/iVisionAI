/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds
    ignoreBuildErrors: true,
  },
  // Ensure this is properly processed by Next.js 15
  experimental: {
    // Disable type checking during builds
    skipTypechecking: true,
    // Disable linting
    disableESLint: true,
  },
};

export default nextConfig; 