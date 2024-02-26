import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotnev from 'dotenv'
dotnev.config()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define: {
  //   'process.env': process.env
  // },
  // base: '/Lava-firebase/'
})
