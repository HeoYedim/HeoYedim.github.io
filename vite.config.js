import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist", // ✅ 빌드 결과를 저장할 폴더 지정
    assetsDir: "assets", // ✅ CSS 및 JS 파일이 들어갈 폴더명
  },
});
