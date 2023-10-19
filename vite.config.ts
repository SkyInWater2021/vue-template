import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression'

const pathSrc = path.resolve(__dirname, 'src')

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd()) // 获取.env文件里定义的环境变量

  return defineConfig({
    base: env.VITE_BASE_PATH,
    resolve: { alias: { '@': pathSrc } },
    server: {
      hmr: true,
      host: '0.0.0.0',
      proxy: {},
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'pinia', 'vue-router'],
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [ElementPlusResolver(), IconsResolver({ prefix: 'Icon' })],
        dts: '.autoImport/auto-import.d.ts',
        eslintrc: {
          enabled: true,
          filepath: '.autoImport/.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),
      Components({
        resolvers: [
          IconsResolver({ prefix: 'Icon', enabledCollections: ['ep'] }),
          ElementPlusResolver(),
        ],
        dirs: [],
      }),
      Icons({ autoInstall: true }),
      viteCompression({ threshold: 100 * 1024 }), // 对大于 100kb 的文件进行压缩
    ],
    build: {
      chunkSizeWarningLimit: 1024,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (/[\\/]node_modules[\\/]/.test(id)) {
              if (/[\\/]vue[\\/]/.test(id)) return 'vendor-vue'
              if (/[\\/]pinia[\\/]/.test(id)) return 'vendor-pinia'
              if (/[\\/]vue-router[\\/]/.test(id)) return 'vendor-vue-router'
              if (/[\\/]element-plus[\\/]/.test(id))
                return 'vendor-element-plus'
              if (/[\\/]@element-plus[\\/]/.test(id))
                return 'vendor-@element-plus-icons'
              if (/[\\/]axios[\\/]/.test(id)) return 'vendor-axios'
              if (/[\\/]echarts[\\/]/.test(id)) return 'vendor-echarts'
              if (/[\\/]dayjs[\\/]/.test(id)) return 'vendor-dayjs'
              if (/[\\/]lodash[\\/]/.test(id)) return 'vendor-lodash'
              return 'vendor'
            }
          },
        },
      },
    },
  })
}
