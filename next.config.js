/* eslint-env node */

/*
 * Timestamp of the current build, exposed to the app as `process.env.BUILD_TIME`.
 *
 * Next inlines this as a string literal at build time, so server and client
 * receive the exact same value — a runtime `new Date()` would differ between
 * the two and break hydration.
 *
 * Used for `dateModified` in the JSON-LD, which previously carried a
 * hand-written date that silently went stale.
 */
const BUILD_TIME = new Date().toISOString();

// https://github.com/vercel/next.js/blob/master/packages/next/next-server/server/config.ts
const nextConfig = {
  env: {
    BUILD_TIME,
  },
  webpack: config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);

    // Next 12 has multiple TS loaders, and we need to update all of them.
    const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'));

    tsRules.forEach(rule => {
      // eslint-disable-next-line no-param-reassign
      rule.include = undefined;
    });

    return config;
  },
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },{
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
