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
  // Set base path for GitHub Pages deployment
  basePath: '/home',
  assetPrefix: '/home/',
}

export default nextConfig
