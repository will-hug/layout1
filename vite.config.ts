/*
 * @Author: duguozhi 1447607151@qq.com
 * @Date: 2024-06-24 17:51:48
 * @LastEditors: duguozhi 1447607151@qq.com
 * @LastEditTime: 2024-06-28 09:39:33
 * @FilePath: \layout\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import path from 'path'
// import Inspect from 'vite-plugin-inspect'
// import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// import Icons from 'unplugin-icons/vite';
// import IconResolver from 'unplugin-icons/resolver';
// const pathSrc = path.resolve(__dirname, 'src')
/***
 * npm i unplugin-auto-import unplugin-vue-components unplugin-icons -D
 * element  按需引入案例
 * https://github.com/sxzz/element-plus-best-practices/blob/db2dfc983ccda5570033a0ac608a1bd9d9a7f658/vite.config.ts
 */
// https://vitejs.dev/config/
import ElementPlus from 'unplugin-element-plus/vite'
import path from "path"
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    ElementPlus({useSource:true})
  
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
