import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence the "webpack config but no turbopack config" error on Vercel
  turbopack: {},

  webpack: (config, { dev }) => {
    if (dev) {
      // Polling for WSL2 — Windows filesystem doesn't support inotify
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
