import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
    ];
  },
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
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
        // search omitted → allows any query string (w=, q= params)
      },
    ],
    qualities: [75, 90],
  },
};

export default nextConfig;
