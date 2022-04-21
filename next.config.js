/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  },
  assetPrefix: '.',
  images: { loader: 'custom' },
}

module.exports = nextConfig
