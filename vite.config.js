import { defineConfig } from 'vite'
import createVuePlugin from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
const path = require("path");
export default defineConfig({
  plugins: [createVuePlugin({
    template: {
      compilerOptions: {
        compatConfig: {
          MODE: 2
        }
      }
    }
  })],
  resolve: {
    alias: {
        vue: '@vue/compat'
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }
  }
})