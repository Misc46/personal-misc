import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true, // Use false for temporary redirect
      },
    ]
  },
};

export default nextConfig;
