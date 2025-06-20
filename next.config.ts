const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/swethasrinivasan.github.io' : '',
  assetPrefix: isProd ? '/swethasrinivasan.github.io/' : '',
};

export default nextConfig;
