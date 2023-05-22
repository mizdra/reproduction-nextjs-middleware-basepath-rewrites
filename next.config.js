/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // NOTE: Removing `basePath` prevents runtime errors.
  basePath: '/base',
  // NOTE: Removing `rewrites` prevents runtime errors.
  async rewrites() {
    return [
      {
        // Route /backend-api/graphql to the backend server.
        source: '/backend-api/graphql',
        destination: 'http://localhost:3001/base/backend-api/graphql',
      }
    ]
  },

}

module.exports = nextConfig
