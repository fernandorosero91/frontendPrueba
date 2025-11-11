/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
  trailingSlash: false,
  distDir: '.next',
  // Disable static generation to avoid runtime errors during build
  generateEtags: false,
  // Skip static optimization for all pages
  skipTrailingSlashRedirect: true,
  // Explicitly configure webpack aliases
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(process.cwd(), '.'),
    };
    return config;
  },
}

export default nextConfig
