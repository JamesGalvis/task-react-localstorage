import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://jamesgalvis.github.io/task-react-localstorage/",
  plugins: [react()],
})
