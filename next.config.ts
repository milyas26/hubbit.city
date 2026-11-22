import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Ekspor statis ke out/, disajikan Cloudflare Workers (static assets, lihat wrangler.jsonc).
  output: 'export',
  // /en → out/en/index.html, cocok dengan html_handling Workers.
  trailingSlash: true,
  poweredByHeader: false,
}

export default nextConfig
