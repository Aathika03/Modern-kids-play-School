/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // keep qualities that you will use; we use 75 in the Hero
    qualities: [75],
  },
};

module.exports = nextConfig;
