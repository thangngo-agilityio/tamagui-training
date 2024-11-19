import { withTamagui } from '@tamagui/next-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const nextConfig = () => {
  /** @type {import('next').NextConfig} */
  let config = {
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    transpilePackages: ['react-native-web'],
    experimental: {
      scrollRestoration: true,
      turbo: {
        resolveAlias: {
          'react-native': 'react-native-web',
        },
        resolveExtensions: [
          '.web.js',
          '.web.jsx',
          '.web.ts',
          '.web.tsx',
          '.mdx',
          '.tsx',
          '.ts',
          '.jsx',
          '.js',
          '.mjs',
          '.json',
        ],
      },
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'react-native$': 'react-native-web',
      };

      if (!isServer) {
        config.plugins.push(
          new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css',
            insert: '#some-element',
          }),
        );
      }

      return config;
    },
    async headers() {
      return [
        {
          source: '/:all*(svg|jpg|png |webp)',
          locale: false,
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=86400, must-revalidate',
            },
          ],
        },
      ];
    },
  };
  const tamaguiPlugin = withTamagui({
    config: './src/tamagui.config.ts',
    components: ['tamagui'],
    outputCSS: process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
    disableExtraction: process.env.NODE_ENV === 'development',
  });

  return {
    ...config,
    ...tamaguiPlugin(config),
  };
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
// images: {
//   remotePatterns: [
//     {
//       protocol: 'https',
//       hostname: '**',
//     },
//   ],
// },
// async headers() {
//   return [
//     {
//       source: '/:all*(svg|jpg|png |webp)',
//       locale: false,
//       headers: [
//         {
//           key: 'Cache-Control',
//           value: 'public, max-age=86400, must-revalidate',
//         },
//       ],
//     },
//   ];
// },
// };

// export default nextConfig;
