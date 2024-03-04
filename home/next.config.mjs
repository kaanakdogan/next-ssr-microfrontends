import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/mfe",
        destination: `http://localhost:3001/mfe`,
      },
      {
        source: "/mfe/:path*",
        destination: `http://localhost:3001/mfe/:path*`,
      },
    ];
  },
  webpack: (config, options) => {
    config.plugins.push(new NextFederationPlugin({
      name: 'home',
      filename: 'static/chunks/remoteEntry.js',
      remotes: {
        mfe1: `mfe1@http://localhost:3001/mfe1/_next/static/${options.isServer ? 'ssr' : 'chunks'}/remoteEntry.js`
      }
    }));

    return config;
  }
};

export default nextConfig;
