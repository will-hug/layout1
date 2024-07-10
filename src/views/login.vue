<!--
 * @Author: duguozhi 1447607151@qq.com
 * @Date: 2024-06-26 10:55:38
 * @LastEditors: duguozhi 1447607151@qq.com
 * @LastEditTime: 2024-06-30 16:26:01
 * @FilePath: \layout\src\views\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    login
    <el-button @click="btn">123</el-button>
    <el-button @click="upData()">upData</el-button>
    <el-button @click="getJia">getJia</el-button>
    <el-button v-for="(item, index) in tzdg" :key="item" @click="btn1(item, index)">{{ item }}</el-button>
  </div>
</template>
<script setup lang="ts">
import { ElButton } from "element-plus"

import { ref, computed, reactive } from "vue"




// const json = {
//   name: '张三',
//   addr: '广州'
// };
// const str = JSON.stringify(json, null, 2);
// const url = `data:,${str}`;

let tzdg = ref<Array<string>>(['中', '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸', '子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥',])
const dbRequery = window.indexedDB.open('hugSql', 109)
let db = null
// 第一次，或者版本升级时执行，根据配置信息建立表
dbRequery.onupgradeneeded = function (event) {
  console.log('event', event)
  db = event.target.result
  // if (db.objectStoreNames.contains(key)) { } else {
  if (!db.objectStoreNames.contains('time')) {
    // 索引名称、索引所在的属性、配置对象（说明该属性是否包含重复的值）。
    const objectStore = db.createObjectStore('time', { keyPath: 'id', autoIncrement: true })
    objectStore.createIndex("value", "value", { unique: true });
    objectStore.createIndex("disable", "id", { unique: true });
  }

  // objectStore.createIndex("minutes", "minutes", { unique: false });
  // objectStore.createIndex("day", "day", { unique: false });
  // objectStore.createIndex("month", "month", { unique: false });
  // objectStore.createIndex("year", "year", { unique: false });
  // objectStore.createIndex("notified", "notified", { unique: false });
  // 建立索引
  // for (const key2 in store.index) {
  //   const unique = store.index[key2]
  //   objectStore.createIndex(key2, key2, { unique: unique })
  // }

  // }

}
let _db: any = null
dbRequery.onsuccess = function (res) {
  console.log('open onsuccess', res)
  _db = res.target.result

}
dbRequery.onerror = function (err) {
  console.log(onerror, err)
}
function getJia() {
  const storeName = 'time'
  const objectStore: IDBObjectStore = _db.transaction([storeName], 'readwrite').objectStore(storeName);
  const request1 = objectStore.index('value').get('甲')
  request1.onsuccess = function (event) {
    let cursor = event?.target?.result
    console.log(' get  .onsuccess', cursor)
    console.log('getJia ===============>', request1.result)
  };
  request1.onerror = function (event) { console.log('getJia   .onerror', event) };

}
function btn() {
  const storeName = 'time'
  const objectStore: IDBObjectStore = _db.transaction([storeName], 'readwrite').objectStore(storeName);
  const request1: IDBRequest = objectStore.get(11)
  request1.onsuccess = function (event) {
    let cursor = event?.target?.result
    console.log(' get  .onsuccess', cursor)
    console.log('request1 ===============>', request1.result)
  };
  request1.onerror = function (event) { console.log('equest.onerror', event) };

  //   next
  // 光标在商店开始时打开;然后，光标返回所有记录，甚至是重复的记录， 按键的递增顺序排列。

  // nextunique
  // 光标在商店开始时打开;然后，光标返回所有不重复的记录， 按键的递增顺序排列。

  // prev
  // 光标在商店的末尾打开;然后，光标返回所有记录，甚至是重复的记录， 按键的递减顺序排列。

  // prevunique
  // 光标在商店的末尾打开;然后，光标返回所有不重复的记录， 按键的递减顺序排列。
  console.log('IDBKeyRange', IDBKeyRange.upperBound(10))
  const objectStore2: IDBObjectStore = _db.transaction([storeName]).objectStore(storeName);
  const request2 = objectStore2.openCursor(IDBKeyRange.upperBound('id', true), "prev");
  request2.onsuccess = (event) => {
    let cursor = event?.target?.result;
    if (cursor) {
      console.log('request2.onsuccess', cursor.value)
      cursor.continue();
    }
  };
  request2.onerror = (event) => { }
}

function btn1(value: any, id: any) {
  const storeName = 'time'

  const objectStore: IDBObjectStore = _db.transaction([storeName], 'readwrite').objectStore(storeName);
  let obj = {
    value,
    disable: 1,

  }

  const request: IDBRequest = objectStore.add(obj);
  request.onsuccess = function (event) { console.log('btn1      onsuccess', event) };
  request.onerror = function (event) { console.log('btn1       onerror', event) };
}
function upData() {
  return
  const storeName = 'time'

  const objectStore: IDBObjectStore = _db.transaction([storeName], 'readwrite').objectStore(storeName);
  let obj = {
    id: 1,
    disable: 2,

  }
  const request: IDBRequest = objectStore.put(obj);
  request.onsuccess = function (event) {
    console.log('upData      onsuccess', event)
    btn()
  };
  request.onerror = function (event) { console.log('upData       onerror', event) };
}
</script>
<style scoped lang="scss"></style>