module.exports = {
  globDirectory: "./",
  globPatterns: [
    "**/*.{html,ico}"
  ],
  globIgnores: [
    "node_modules/**/*",
    "{.,_}*/**/*",
    "**/*.{md}",
    "Gemfile*",
    "package*"
  ],
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 30, 
        },
      },
    },
    {
      urlPattern: /\.(?:css|js)$/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'assets',
      },
    },
    {
      urlPattern: /^https:\/\/apiplant\.abdulfaqih\.eu\.org\/plant/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'api-plant-cache',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 5, 
        },
      },
    },
    {
      urlPattern: /^https:\/\/api-article\.abdulfaqih\.eu\.org/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'api-article-cache',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 5, 
        },
      },
    },
  ],
  swDest: "./sw.js",
  sourcemap: false
};
