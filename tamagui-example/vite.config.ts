import react from '@vitejs/plugin-react-swc';
import reactNativeWeb from 'vite-plugin-react-native-web';
import { defineConfig } from 'vite';

const extensions = ['.web.tsx', '.web.jsx', '.web.js', '.web.ts', '.tsx', '.ts', '.js'];

export default defineConfig(() => {
  const config = {
    plugins: [
      react({
        babel: {
          plugins: [
            [
              '@babel/plugin-transform-react-jsx',
              {
                runtime: 'automatic',
                importSource: 'nativewind',
              },
            ],
          ],
        },
      }),
      reactNativeWeb(),
    ],
    define: {
      DEV: `${process.env.NODE_ENV === 'development' ? true : false}`,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
    resolve: {
      extensions,
      alias: [
        { find: './runtimeConfig', replacement: './runtimeConfig.browser' },
        // **@NOTE**: This is the most important piece, swapping **react-native** with **react-native-web**
        { find: 'react-native', replacement: 'react-native-web' },
        { find: 'react-native-svg', replacement: 'react-native-svg-web' },
      ],
    },
    build: {
      rollupOptions: {
        external: ['react-native'],
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        resolveExtensions: extensions,
      },
    },
    loader: {
      '.js': 'jsx',
      '.ts': 'tsx',
    },
  };
  return config;
});
