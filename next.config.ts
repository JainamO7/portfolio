import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  cacheComponents: true,
  partialPrefetching: true,
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    minimumCacheTTL: 86400,
  },
  experimental: {
    agentUpgrade: "security",
  },
};

export default nextConfig;
