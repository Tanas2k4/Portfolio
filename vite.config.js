import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Sử dụng đường dẫn gốc '/' cho tên miền riêng tanas2k4.dev
  server: {
    port: 5173,
    proxy: {
      // Proxy /devto-api/* → https://dev.to/api/* (tránh CORS khi chạy local)
      "/devto-api": {
        target: "https://dev.to",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/devto-api/, "/api"),
      },
    },
  },
});
