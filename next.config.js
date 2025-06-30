const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["@heroicons/react", "framer-motion"],
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = withNextIntl(nextConfig);
