/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    async rewrites() {
      return [
        {
          source: "/l/:path*",
          destination: "https://li.dahoam.ventures/:path*",
        },
      ];
    },
  };
  
