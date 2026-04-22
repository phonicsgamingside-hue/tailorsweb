import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',      // Ye line static build ke liye zaroori hai
  images: {
    unoptimized: true,   // GitHub Pages par images chalane ke liye
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  transpilePackages: ['motion'],
};

export default nextConfig;
