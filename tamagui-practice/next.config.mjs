import { withTamagui } from '@tamagui/next-plugin';

const nextConfig = () => {
  /** @type {import('next').NextConfig} */
  let config = {
    typescript: {
      ignoreBuildErrors: true,
    },
    transpilePackages: ['react-native-web'],
    experimental: {
      scrollRestoration: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
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
