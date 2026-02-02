import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true,
    proxy: {
      // API 요청을 백엔드 서버로 프록시
      '/api': {
        target: 'http://221.168.36.171:8080',  // 백엔드 서버 주소
        changeOrigin: true,  // CORS 우회
        secure: false,
        rewrite: (path) => path,
      }
    }
  },
})
