// next.config.mjs

import webpack from 'webpack';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.plugins.push(new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }));
    return config;
  }
}

export default nextConfig;
