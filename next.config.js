/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "development",
  poweredByHeader: process.env.NODE_ENV === "development",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://where-is-toilet.herokuapp.com/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
