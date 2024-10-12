import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-glb',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url.endsWith('.glb')) {
            res.setHeader('Content-Type', '/gltf-binary');
          }
          next();
        });
      },
    },
  ],
});
