/*
 * @Author: duguozhi 1447607151@qq.com
 * @Date: 2024-06-24 17:51:48
 * @LastEditors: duguozhi 1447607151@qq.com
 * @LastEditTime: 2024-07-03 18:50:37
 * @FilePath: \layout1\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
