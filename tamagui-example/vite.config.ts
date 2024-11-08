import react from '@vitejs/plugin-react';
import { tamaguiPlugin } from '@tamagui/vite-plugin';
import { defineConfig } from 'vite';

const extensions = ['.web.tsx', '.web.jsx', '.web.js', '.web.ts', '.tsx', '.ts', '.js'];

export default defineConfig(() => {
  const config = {
    define: {
      DEV: `${process.env.NODE_ENV === 'development' ? true : false}`,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
    resolve: {
      alias: [{ find: 'react-native', replacement: 'react-native-web' }],
    },
    build: {
      rollupOptions: {
        // external: ['react-native'],
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        resolveExtensions: extensions,
      },
    },
    plugins: [
      react(),
      tamaguiPlugin({
        // points to your tamagui config file
        config: 'src/tamagui.config.ts',
        // points to any linked packages or node_modules
        // that have tamagui components to optimize
        components: ['tamagui'],
        // turns on the optimizing compiler
        optimize: true,
      }),
    ].filter(Boolean),
  };
  return config;
});
