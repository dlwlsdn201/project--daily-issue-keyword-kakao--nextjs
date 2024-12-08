const nextConfig = {
  env: {},
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'], // to activate tree shaking
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
