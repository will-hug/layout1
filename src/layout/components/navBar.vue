<template>
   <div style="width: 100%;background: #ff0;display: flex;">
    123
   </div>
</template>
<script setup lang="ts">
import { useRoute} from "vue-router"
import {watch} from "vue"
const route=useRoute()
console.log('route',route.path)
// watch(()=>{
// })
</script>