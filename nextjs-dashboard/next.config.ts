import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental' // ppr部分的な事前レンダリングー＞有効
  }
};

export default nextConfig;
