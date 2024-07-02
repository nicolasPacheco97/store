import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  Object.assign(process.env, loadEnv(mode, process.cwd() + '/src/enviroment', ""));
  return {
      plugins: [
      react(),
      federation({
        name: "root-app",
        shared: ["react", "react-dom"],
        remotes: {
          "productApp": process.env.VITE_PRODUCT_MODULE
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
  }
})
