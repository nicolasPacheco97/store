import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "root-app",
      shared: ["react", "react-dom"],
      remotes: {
        "productApp": "https://nicolaspacheco97.github.io/productPage/assets/remoteEntry.js"
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  base: "/store/"
})
