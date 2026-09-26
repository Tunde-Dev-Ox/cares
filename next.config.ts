import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
        // search omitted → allows any query string (w=, q= params)
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
        // search omitted → allows any query string (w=, q= params)
      },
    ],
    qualities: [75, 90],
  },
};

export default nextConfig;
