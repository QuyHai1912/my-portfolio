import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👇 Cấu hình base để GitHub Pages load asset đúng
  base: "/my-portfolio/",
  build: {
    outDir: "dist", // thư mục build
  },
  server: {
    port: 5173, // cổng dev (có thể đổi tuỳ ý)
  },
});
