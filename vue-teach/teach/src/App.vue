<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import XuatThongTin from './components/XuatThongTin.vue';
import PostList from './components/PostList.vue';
</script>

<template>
  <div class="container">
    <!-- <HelloWorld msg="Hello tomnyson!" />
      <XuatThongTin mssv="pk001" ten="Lê Hồng Sơn" lop="soa308" /> -->
    <PostList />
  </div>
</template>

<style scoped></style>
