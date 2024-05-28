/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:59
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-15 14:24:52
 */
import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
// 图片压缩
import viteImagemin from 'vite-plugin-imagemin';
import vue from '@vitejs/plugin-vue';
// element-plus按需加载
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// 开启gzip压缩
import viteCompression from 'vite-plugin-compression';

export default ({ mode }) => {
  const { VITE_BASE_URL } = loadEnv(mode, process.cwd());

  return defineConfig({
    base: VITE_BASE_URL,
    plugins: [
      vue(),
      viteCompression({
        // 过滤器，对哪些类型的文件进行压缩，默认为 /.(js|mjs|json|css|html)$/i
        // filter: '/.(js|mjs|json|css|html)$/i',
        verbose: true,
        // 是否删除源文件
        deleteOriginFile: false,
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        dts: 'auto-imports.d.ts',
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@': resolve(__dirname, './src'),
        '@assets': resolve(__dirname, 'src/assets'),
        '@plugins': resolve(__dirname, 'src/plugins'),
        '@components': resolve(__dirname, 'src/components'),
        '@router': resolve(__dirname, 'src/router'),
        '@views': resolve(__dirname, 'src/views'),
        '@store': resolve(__dirname, 'src/store'),
        '@utils': resolve(__dirname, 'src/utils'),
        '@config': resolve(__dirname, 'src/config'),
        '@api': resolve(__dirname, 'src/api'),
        '@g': resolve(__dirname, 'src/global'),
        '@page': resolve(__dirname, 'src/views/page'),
      },
    },
    server: {
      // 端口号
      port: 3000,
      // 监听所有地址
      host: '0.0.0.0',
      // 服务启动时是否自动打开浏览器
      open: true,
      // 允许跨域
      cors: true,
      // 自定义代理规则
      proxy: {},
    },
    build: {
      // 设置最终构建的浏览器兼容目标
      target: 'es2015',
      // 构建后是否生成 source map 文件
      sourcemap: false,
      //  chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 3000,
      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: false,
      // 清除console和debugger
      // terserOptions: {
      // 	compress: {
      // 		drop_console: true,
      // 		drop_debugger: true
      // 	}
      // },
      outDir: 'vue3-lazyly-admin',
      rollupOptions: {
        output: {
          // 静态资源分类打包
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            // 静态资源分拆打包

            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
        },
      },
    },
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      __VUE_PROD_DEVTOOLS__: 'false',
    },
  });
};
