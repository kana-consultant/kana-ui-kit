import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import path from 'node:path'

const external = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  'react/jsx-dev-runtime',
  'class-variance-authority',
  'clsx',
  'tailwind-merge',
  'lucide-react',
  'zod',
  /^@radix-ui\//,
  /^@tanstack\//,
]

export default defineConfig(({ mode }) => {
  const isLib = mode !== 'playground'

  return {
    plugins: [
      react(),
      tailwindcss(),
      ...(isLib
        ? [
            dts({
              tsconfigPath: './tsconfig.build.json',
              include: ['src'],
              exclude: [
                'src/**/*.stories.@(ts|tsx)',
                'src/stories/**',
                'src/main.tsx',
                'src/playground.tsx',
                'src/vite-env.d.ts',
              ],
              rollupTypes: true,
              insertTypesEntry: true,
            }),
          ]
        : []),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: isLib
      ? {
          outDir: 'dist',
          emptyOutDir: true,
          cssCodeSplit: false,
          sourcemap: true,
          lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: () => 'index.js',
          },
          rollupOptions: {
            external,
            output: {
              assetFileNames: (asset) => (asset.names.includes('style.css') ? 'index.css' : '[name][extname]'),
            },
          },
        }
      : undefined,
  }
})
