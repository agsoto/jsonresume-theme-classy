import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'jsonresume-theme-classy',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: [
        'handlebars',
        'html-minifier',
        'marked',
        '@fluent/bundle',
        '@fluent/langneg',
        'node:fs',
        'node:path',
        'node:buffer'
      ]
    },
    outDir: 'dist',
    emptyOutDir: true
  }
});
