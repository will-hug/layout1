<template>
  <div style="height: 100vh ;overflow: hidden;display: flex;justify-content: space-between;width: 100vw;">
    <sideBar></sideBar>
    <div style="flex-grow: 1;">
      <navBar></navBar>
      <div style="background: #f00;">
        <RouterView />
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import sideBar from "./components/sideBar.vue"
import navBar from "./components/navBar.vue"
import { RouterView } from 'vue-router'
</script>
<style scoped lang="scss"></style>