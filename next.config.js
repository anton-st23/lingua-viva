/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // 🔥 ВАЖНО: отключаем статический экспорт, чтобы динамические маршруты работали
  output: undefined, 

  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
