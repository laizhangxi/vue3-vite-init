import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080, // 设置服务启动端口号
    host: '0.0.0.0',
    // open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    proxy: {
      '/api': {
        target: 'http://localhost:51735',//代理的地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/online': {
        target: 'http://localhost:51735',//代理的地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/online/, '')
      },
    }
  }
})
