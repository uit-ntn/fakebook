import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
