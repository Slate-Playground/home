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
}

export default nextConfig
