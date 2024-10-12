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
      name: 'scene-glb',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Log the requested URL for debugging
          console.log('Requested URL:', req.url);

          if (req.url.endsWith('.glb')) {
            res.setHeader('Content-Type', 'model/gltf-binary');
            console.log('Setting Content-Type for .glb file');
          }

          next();
        });
      },
    },
  ],
});
