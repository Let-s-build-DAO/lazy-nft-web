// next.config.js
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      type: 'javascript/esm',
      resolve: {
        fullySpecified: false,
      },
    });
    return config;
  },
};

module.exports = nextConfig;
