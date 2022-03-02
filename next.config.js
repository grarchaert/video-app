/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["onrewind.imgix.net", "staging-onrewind.imgix.net"],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
