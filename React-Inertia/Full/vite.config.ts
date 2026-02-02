import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import path from 'path';
import { resolve } from 'node:path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),

    ],
    esbuild: {
        jsx: 'automatic',
    },
     resolve: {
        alias: {
            '@/': path.resolve(__dirname, './resources/js'),
            '@/images': path.resolve(__dirname, 'resources/images'),
            '@/scss': path.resolve(__dirname, 'resources/scss'),
            '@/data': path.resolve(__dirname, 'resources/data'),
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
        },
    },
});
