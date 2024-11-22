import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:4000", // Backend server URL
        changeOrigin: true, // Ensures the host header is changed to target URL
        rewrite: (path) => path.replace(/^\/api/, ""), // Removes "/api" from the request path
      },
    },
  },
});
