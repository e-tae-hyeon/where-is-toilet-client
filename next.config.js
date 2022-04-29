/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "development",
  poweredByHeader: process.env.NODE_ENV === "development",
};

module.exports = nextConfig;
