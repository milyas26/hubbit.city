import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Image standalone untuk Docker (lihat README).
  output: 'standalone',
  poweredByHeader: false,
}

export default nextConfig
