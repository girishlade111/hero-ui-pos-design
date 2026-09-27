/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hero-ui-pos-design',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig