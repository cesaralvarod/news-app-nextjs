/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "techrun.com",
      // "semana.com",
      "https://www.semana.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
