const webpack = require("webpack");
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
            },
            {
                protocol: "http",
                hostname: "**",
            },
        ],
      },
    experimental: {
        serverActions: {
            bodySizeLimit: "30mb"
        }
    },
    webpack: (config) => {
        return config;
    },
};

module.exports = nextConfig;
