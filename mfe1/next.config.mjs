import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/mfe1',
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(new NextFederationPlugin({
      name: 'mfe1',
      filename: 'static/chunks/remoteEntry.js',
      exposes: {
        './button': './src/components/button'
      },
      extraOptions: {
        exposePages: true,
        enableImageLoaderFix: true,
        enableUrlLoaderFix: true,
        automaticPageStitching: false,
      },
    }));

    return config;
  }
};

export default nextConfig;
