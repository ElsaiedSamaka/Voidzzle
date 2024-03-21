const nextConfig = {
  // Target: 'serverless' for serverless deployment
  target: 'server',

  // React Strict Mode
  reactStrictMode: false,

  // Build
  distDir: 'build',

  // i18n with next
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'ar',
  },

  // Other experimental features
  // experimental: {},

  // Environment variables
  env: {
    // Define environment variables here
  },

  // Image optimization configuration
  images: {
    // Image optimization configuration
    domains: ['images.unsplash.com'],
  },

  // Redirects configuration
  redirects: async () => {
    return [
      // Define redirects here
    ];
  },

  // Rewrites configuration
  rewrites: async () => {
    return [
      // Define custom rewrites here
    ];
  },

  // Custom headers configuration
  headers: async () => {
    return [
      {
        source: '/path',
        headers: [
          {
            key: 'Custom-Header',
            value: 'Value',
          },
        ],
      },
    ];
  },

  // Customizing the build output directory
  // distDir: 'build',

  // Enable compilation of TypeScript files
  typescript: {
    // Enable type checking during production build
    ignoreBuildErrors: true,
  },

  // Custom server configuration
  serverRuntimeConfig: {
    // Define server runtime configuration
  },
  publicRuntimeConfig: {
    // Define public runtime configuration
  },

  // Trailing slash configuration
  trailingSlash: true,

  // Other configurations
  // See: https://nextjs.org/docs/api-reference/next.config.js/introduction
};

module.exports = nextConfig;
