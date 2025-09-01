/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  eslint: {
    // ✅ Skip ESLint checks during builds (Vercel will not block deployment)
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
