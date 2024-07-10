<!--
 * @Author: duguozhi 1447607151@qq.com
 * @Date: 2024-06-26 10:30:10
 * @LastEditors: duguozhi 1447607151@qq.com
 * @LastEditTime: 2024-07-03 19:31:35
 * @FilePath: \layout1\src\layout\components\sideBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div style="height: 100vh; ">
    <el-menu style="--el-menu-text-color:red;--el-menu-active-color:#0f0;height: 100vh; " default-active="2"
      class="el-menu-vertical-demo" unique-opened @open="handleOpen" @close="handleClose">
      <el-sub-menu v-for="item in 10" :index="item" :key="item">
        <template #title>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script setup lang="ts"> 
function handleOpen() {

}
</script>