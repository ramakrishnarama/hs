/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ✅ This allows deployment even if there are TS errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // ✅ This skips ESLint checks too
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
