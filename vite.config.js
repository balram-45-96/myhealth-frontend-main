import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  build: {
    sourcemap: false,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/assets"),
      "@components": resolve(__dirname, "src/components"),
      "@pages": resolve(__dirname, "src/pages"),
      "@store": resolve(__dirname, "src/store"),
      "@styles": resolve(__dirname, "src/styles"),
      "@utils": resolve(__dirname, "src/utils"),
      "@data": resolve(__dirname, "src/data"),
    },
  },
  server: {
    host: true,
    port: 3000,
    watch: {
      usePolling: false,
    },
    hmr: {
      overlay: false,
    },
    strictPort: true,
    allowedHosts: ["myhealth.org.in"],
  },
});
