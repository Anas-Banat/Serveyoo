/** @type {import('next').NextConfig} */
const nextConfig = {
    module: {
        rules: [
          {
            test: /\.(mp4)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 100000, // 100 KB
              },
            },
          },
        ],
      },
}

module.exports = nextConfig
