/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactStrictMode: true,
    serverActions: true,
    output: "export",
    images: {
      unoptimized: true,
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": __dirname,
    };
    return config;
  },
};
module.exports = nextConfig;
