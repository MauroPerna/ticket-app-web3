/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com", "cdn.logo.com", 'drive.google.com'],
  }
}

module.exports = nextConfig
