/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  // Always enable static export
  output: 'export',
  trailingSlash: true,
  // Disable server-side features for static export
  experimental: {
    appDir: true,
  },
}

export default nextConfig
