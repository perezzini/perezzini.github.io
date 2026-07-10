import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://perezzini.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
})
