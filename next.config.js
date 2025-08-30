/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 让 /docs 下的静态文件能被正确服务
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: '/docs/:path*',
      },
    ];
  },
};
module.exports = nextConfig;
